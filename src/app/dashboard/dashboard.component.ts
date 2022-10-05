import { Component, OnInit } from '@angular/core';
import { ProductService } from '../assets/services/product/product.service';
import { CategoryService } from '../assets/services/category/category.service';

import { Product } from '../assets/models/product';
import { Category } from '../assets/models/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  userType: string = 'User'; //Change to 'Admin' to see the hidden features

  showModal = false;
  bestSellers: Product[] = [];
  products: Product[] = [];
  categories: Category[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.getBestSellers();
    })

    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    })
  }

  getBestSellers(){
    this.bestSellers = this.products.sort((a,b)=> (a.unitsSold < b.unitsSold ?  1 : -1)).slice(0,5);
  }

  toggleModal(){
    this.showModal = !this.showModal;
  }
}



