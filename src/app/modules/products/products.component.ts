import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/assets/models/product';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: String[] = ["All", "Clothes", "Bags & Accessories", "Shoes", "Technology", "Appliances", "Sports"]
  selectedCategory = null
  sortBy:string = 'productId';
  public searchInput: string = ""
  
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  sort(sortBy:string){
    this.sortBy = sortBy;
  }

  valueSelected() {
    if(this.selectedCategory == "All") {
      this.productService.getProducts().subscribe((products) => {
        this.products = products;
      });
    } else {
      this.productService.getProducts().subscribe((products) => {
        this.products = products.filter((product: { productCategory: String; }) => product.productCategory == this.selectedCategory);
      });
    }

  }

  // this.products
  //     .sort((a, b) => (a.unitsSold < b.unitsSold ? 1 : -1))

  emitAction(event: { productId: number; action: string }) {
    switch (event.action) {
      case 'edit':
        // change later to edit function
        alert('edit ' + event.productId);
        break;
      case 'delete':
        // change later to delete function
        alert('delete ' + event.productId);
        break;
      default:
        return;
    }
  }
}
