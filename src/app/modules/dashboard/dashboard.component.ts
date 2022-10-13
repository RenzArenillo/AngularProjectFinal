import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/models/category';
import { Login } from 'src/app/models/login';
import { Product } from 'src/app/models/product';
import { User } from 'src/app/models/users';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { LoginService } from '../login/services/login.service';
import { CartService } from '../products/services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  slider: any;
  defaultTransform: any;
  @Input()
  category!: Category;

  @Output() emittter = new EventEmitter();
  userType: string = '';
  filter: string = '';
  dropDown: boolean = false;
  user: User | any;
  loading = true;
  showModal = false;
  bestSellers: Product[] = [];
  mostExpensive: Product[] = [];
  cheapest: Product[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  selectedProduct?: Product;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
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

    this.user = this.loginService.getUser();
  }
  goNext() {
    this.defaultTransform = this.defaultTransform - 398;
    if (Math.abs(this.defaultTransform) >= this.slider.scrollWidth / 1.7)
      this.defaultTransform = 0;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }

  goPrev() {
    if (Math.abs(this.defaultTransform) <= 0) this.defaultTransform = this.defaultTransform;
    else this.defaultTransform = this.defaultTransform + 398;
    this.slider.style.transform = 'translateX(' + this.defaultTransform + 'px)';
  }
  
  emit(category: Category){
    this.emittter.emit(category);
  }

  getMostExpensive(){
    this.mostExpensive = this.products
      .sort((a, b) => (a.productPrice < b.productPrice ? 1 : -1))
      .slice(0, 5);
  }

  getCheapest(){
    this.cheapest = this.products
      .sort((a, b) => (a.productPrice < b.productPrice ? -1 : 1))
      .slice(0, 5);
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
