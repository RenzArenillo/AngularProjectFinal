import { Component, OnInit } from '@angular/core';
import { CartService } from '../../products/services/cart.service';

// import { CartService } from 'src/app/modules/product/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalItem : number = 0;
  constructor(private cartService:CartService) {  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res =>{
      this.totalItem = res.length; 
    })
  }
}
