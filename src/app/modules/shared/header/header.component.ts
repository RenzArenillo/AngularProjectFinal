import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/assets/models/users';
import { LoginService } from '../../login/services/login.service';
import { CartService } from '../../products/services/cart.service';

// import { CartService } from 'src/app/modules/product/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active = '/dashboard';
  user: User | any;
  @Input() currentRoute!: string;
  totalQuantity: number = 0;
  totalItem: number = 0;
  cartItems: number = 0;
  constructor(
    private cartService: CartService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = this.cartService.incrementCart(this.cartItems);
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
    this.totalQuantity = this.cartService.getTotalQuantity();
  }
}
