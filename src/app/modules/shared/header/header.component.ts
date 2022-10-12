import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/assets/models/users';
import { LoginService } from '../../login/services/login.service';
import { CartService } from '../../products/services/cart.service';

// import { CartService } from 'src/app/modules/product/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropDown: boolean = false;
  totalQuantity:number = 0;
  totalItem: number = 0;
  cartItems:number = 0;
  user?:User;
  constructor(private cartService:CartService, private loginService: LoginService
    ) {     this.user = this.loginService.getUser()
    }

  ngOnInit(): void {
    this.user = this.loginService.getUser()
    this.cartService.getProducts().subscribe(res =>{
      // this.totalItem = res.length; 
      // this.totalItem = this.cartService.incrementCart(this.cartItems);
      // this.totalQuantity = this.cartService.getTotalQuantity();
      // this.totalItem = this.cartService.incrementCart(this.totalItem);
      // this.totalItem = this.cartService.addAllQuantities(res);
      this.totalItem = res.reduce((quantity:any,prod:any)=>
      {
        return quantity + prod.productQuantity;
      },0);
    }) 
    // this.totalQuantity = this.cartService.getTotalQuantity(); 
   
  }

  // addCartItem(){o
  //   this.cartService.incrementCart(this.cartItems);
  // }

}
