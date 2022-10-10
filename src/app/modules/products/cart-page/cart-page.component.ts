import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/assets/models/product';
import { ProductChin } from 'src/app/assets/models/productChin';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  productQuantity: number = 1;
  products:Product[] = [];
  totalAmount!:number;
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
      this.cartService.getProducts().subscribe(res =>{
      this.products = res;
      this.totalAmount = this.cartService.getTotalPrice();
    })
  }

  incrementQty(prod:any) {
    this.cartService.incrementQty(prod);
  }
  
  decrementQty(prod:any) {
    this.cartService.decrementQty(prod);
  }

  removeItem(prod:any){
    this.cartService.removeCartItem(prod);
  }

  removeAllItem(){
    this.cartService.removeAllCart();
  }

  

}
