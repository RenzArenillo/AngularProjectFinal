import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';


@Component({
selector: '[app-checkout-items]',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.scss']
})
export class CheckoutItemsComponent implements OnInit {


  @Input() product!:Cart 

  constructor() { }

  ngOnInit(): void {

  }

}
