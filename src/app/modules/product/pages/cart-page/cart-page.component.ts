import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  products:any =[];
  total!:number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.products = res;
      this.total = this.cartService.getTotalPrice();
    })
  }
  
  removeItem(prod:any){
    this.cartService.removeCartItem(prod);
  }

  incrQty(prod:any) {
    this.cartService.incrQty(prod);
  }
}
