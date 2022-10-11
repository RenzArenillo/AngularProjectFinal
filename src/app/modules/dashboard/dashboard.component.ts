import { Component, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/assets/models/category';
import { Login } from 'src/app/assets/models/login';
import { Product } from 'src/app/assets/models/product';
import { User } from 'src/app/assets/models/users';
import { CategoryService } from 'src/app/assets/services/category/category.service';
import { ProductService } from 'src/app/assets/services/product/product.service';
import { LoginService } from '../login/services/login.service';
import { CartService } from '../products/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userType: string = 'Admin';
  filter: string = '';
  dropDown: boolean = false;
  loading = true;
  showModal = false;
  bestSellers: Product[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  selectedProduct?: Product;
  user?: User;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.user = this.loginService.getUser()
    // console.log(JSON.stringify(this.loginService.getUser()) + " from dashboard ts")
    console.log(this.user)

    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      this.categories = res.map((a: any) => a.productCategory);
      this.categories = this.categories.filter(
        (value, index) => this.categories.indexOf(value) === index
      );
      res.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: Number(a.productPrice) });
      });
    });

    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.getBestSellers();
    });

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  getBestSellers() {
    this.bestSellers = this.products
      .sort((a, b) => (a.unitsSold < b.unitsSold ? 1 : -1))
      .slice(0, 5);
  }

  action(event: Category) {
    this.filterBy(event.name);
  }

  getAll() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    this.filter = '';
  }

  filterBy(by: string) {
    this.filter = by;
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products
        .filter((product) => product.productCategory === by)
        .sort((a, b) => (a.productName < b.productName ? -1 : 1));
    });
  }

  productSelected(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }

  addToCart(prod: any) {
    this.cartService.addtoCart(prod);
  }
}
