import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  @Input() products: Product[] = []
  @Output() emittter = new EventEmitter();
  ascName:boolean = true
  ascCat:boolean = true
  ascPrice:boolean = true
  ascSold:boolean = true



  sortBy: string = 'productId';
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {}

  sort(sortBy: string){
    if (sortBy == "productName") {
      if (this.ascName == true) {
        this.products = this.products.sort((a, b) => (a.productName < b.productName ? -1 : 1))
      } else if (this.ascName == false) {
        this.products = this.products.sort((a, b) => (a.productName < b.productName ? 1 : -1))
      }
      this.ascName = !this.ascName
    } else if (sortBy == "productCategory") {
      if (this.ascCat == true) {
        this.products = this.products.sort((a, b) => (a.productCategory < b.productCategory ? -1 : 1))
      } else if (this.ascCat == false) {
        this.products = this.products.sort((a, b) => (a.productCategory < b.productCategory ? 1 : -1))
      }
      this.ascCat = !this.ascCat
    } else if (sortBy == "productPrice") {
      if (this.ascPrice == true) {
        this.products = this.products.sort((a, b) => (a.productPrice < b.productPrice ? -1 : 1))
      } else if (this.ascPrice == false) {
        this.products = this.products.sort((a, b) => (a.productPrice < b.productPrice ? 1 : -1))
      }
      this.ascPrice = !this.ascPrice
    } else if (sortBy == "unitsSold") {
      if (this.ascSold == true) {
        this.products = this.products.sort((a, b) => (a.unitsSold < b.unitsSold ? -1 : 1))
      } else if (this.ascSold == false) {
        this.products = this.products.sort((a, b) => (a.unitsSold < b.unitsSold ? 1 : -1))
      }
      this.ascSold = !this.ascSold
    }
  }


  delete(id:any){
    this.emittter.emit({productId : id, action:"delete"});
  }

  edit(id:any){
    this.emittter.emit({productId : id, action:"edit"});

  }
}
