import { Injectable } from '@angular/core';
import { ProductRenz } from './assets/models/productRenz';

@Injectable({
  providedIn: 'root'
})
export class PassOrdersService {
  products: ProductRenz[] = [];

  constructor() { }

  saveList(products:any){
    this.products = products;
  }
  
  retrieveList(){
    return this.products;
  }
}
