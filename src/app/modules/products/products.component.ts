import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from './services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  categories: String[] = ["All", "Clothes", "Bags", "Accessories", "Shoes", "Technology", "Appliances", "Sports",
    "Furniture", "Pets", "Beauty", "Home Decors"]
  selectedCategory = null
  sortBy:string = 'productId';
  public searchInput: string = ""
  
  constructor(private productService: ProductsService, private router: Router) {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

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

  emitAction(event: { productId: number; action: string }) {
    switch (event.action) {
      case 'edit':
        this.router.navigate(['productsform', event.productId])
        break;
      case 'delete':
        this.productService.delete(event.productId).subscribe((result) => {this.ngOnInit()})
        break;
      default:
        return;
    }
  }

  addProduct(){
    this.router.navigate(['productsform'])
  }

  search(input:String) {
    
    this.search2(input)
  }

  search2(input:String) {
    
    this.productService.getProducts().subscribe((products) => {
      this.products = products.filter((x: { productName: { toLowerCase: () => String[]; }; }) => 
      {return x.productName.toLowerCase().includes(input)});
    });      

  }

  console() {
    console.log(this.products)
  }
  
}
