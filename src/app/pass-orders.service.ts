import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class PassOrdersService {
  products: Product[] = [];

  constructor() { }

  saveList(products:any){
    this.products = products;
  }
  
  retrieveList(){
    return this.products;
  }
}
