import { Component, OnInit } from '@angular/core';
import { CartService } from '../../products/services/cart.service';

// import { CartService } from 'src/app/modules/product/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalQuantity:number = 0;
  totalItem: number = 0;
  cartItems:number = 0;
  constructor(private cartService:CartService) {  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      // this.totalItem = res.length; 
      this.totalItem = this.cartService.incrementCart(this.cartItems);
      this.totalQuantity = this.cartService.getTotalQuantity();
    }) 
    this.totalQuantity = this.cartService.getTotalQuantity(); 
   
  }

  // addCartItem(){o
  //   this.cartService.incrementCart(this.cartItems);
  // }

}
