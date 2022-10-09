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
  sortBy:string = 'productId';
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  sort(sortBy:string){
    this.sortBy = sortBy;
  }

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
