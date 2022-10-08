import { Component, EventEmitter, OnInit, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/assets/models/category';
import { Product } from 'src/app/assets/models/product';
import { CategoryService } from 'src/app/assets/services/category/category.service';
import { ProductService } from '../product/services/product.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userType: string = 'Admin';

  loading = true;
  showModal = false;
  bestSellers: Product[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: Category[] = [];
  selectedProduct?: Product;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
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

  filterBy(by: string) {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products.filter(
        (product) => product.productCategory === by
      );
    });
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (this.selectedProduct) this.showModal = true;
  // }

  productSelected(product: Product) {
    this.selectedProduct = product;
    this.showModal = true;
  }
}
