import { Component, Input, OnInit } from '@angular/core';
import { ProductRenz } from 'src/app/assets/models/productRenz';


@Component({
selector: '[app-checkout-items]',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.scss']
})
export class CheckoutItemsComponent implements OnInit {


  @Input() product!:ProductRenz 

  constructor() { }

  ngOnInit(): void {

  }

}
