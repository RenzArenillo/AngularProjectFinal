import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: any = [];
  products = new BehaviorSubject<any>([]);

  constructor() {}

  getProducts() {
    return this.products.asObservable();
  }
  
  addtoCart(product: any) {
    this.cartList.push(product); 
    this.products.next(this.cartList); 
    this.getTotalPrice();
  }

  getTotalPrice(): number { 
    let totalPrice: number = 0;
    this.cartList.map((x: any) => {
      totalPrice += x.total;
    });
    return totalPrice;
  }

  removeCartItem(product: any) {
    this.cartList.map((a: any, index: any) => {
      if (product.productId === a.productId) {
        this.cartList.splice(index, 1);
      }
    });
    this.products.next(this.cartList);
  }

  removeAllCart() {
    this.cartList = []; 
    this.products.next(this.cartList);
  } 

  public changeQty(product: any)  {
    this.cartList.map((a: any) => {
      if (product.productId === a.productId) {
        return product.length += 1
      }
      return product.length -= 1
    });
  }
}
