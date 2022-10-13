import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartList: any = [];
  products = new BehaviorSubject<any>([]);
  productQuantity: number = 1;
    //need ID user => localstorage user service

  constructor() {}

  getProducts() {
    return this.products.asObservable();
  }

  addtoCart(product: any) {
    // const cartItemsExist = this.cartList.find((x:any) => product.productId === x.productId);
    // if (this.cartList.indexOf(product) != -1) {
    //   product.productQuantity++
    // } else if (cartItemsExist) {
    //   this.incrementQty(product)
    // }
    // else {
    //   this.cartList.push(product);
    //   this.products.next(this.cartList);
    //   this.getTotalPrice();
    // }
    var index = this.cartList.findIndex(
      (item: any) => item.productName === product.productName
    );
    
    if (index > -1) {
      this.cartList[index].productQuantity =
        this.cartList[index].productQuantity + 1;
    } else {
      this.cartList.push(product);
    }
    console.log(this.cartList)

    this.products.next(this.cartList);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let totalPrice: number = 0;
    this.cartList.map((x: any) => {
      totalPrice += x.productPrice * x.productQuantity;
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

  public incrementQty(product: any): number {
    this.cartList.map((x: any) => {
      if (product.productId === x.productId) {
        x.productQuantity += 1;
        this.products.next(this.cartList);
        this.getTotalPrice();
      }
      this.products.next(this.cartList);
      this.getTotalPrice();
    });
    return product.productQuantity;
  }

  public decrementQty(product: any): number {
    this.cartList.map((x: any) => {
      if (product.productId === x.productId) {
        if (product.productQuantity === 1) {
          this.removeCartItem(product);
        }
        x.productQuantity -= 1;
        this.products.next(this.cartList);
        this.getTotalPrice();
      }
      this.products.next(this.cartList);
      this.getTotalPrice();
    });
    return product.productQuantity;
  }

  getTotalQuantity(): number {
    let totalQuantity: number = 0;
    this.cartList.map((x: any) => {
      totalQuantity += x.productQuantity;
    });

    return totalQuantity++;
  }

  addAllQuantities(product: any) {
    let totalQuantity: number = 0;
    this.cartList.map((x: any) => {
      totalQuantity += x.productQuantity;
    });
    return totalQuantity;
  }
}
