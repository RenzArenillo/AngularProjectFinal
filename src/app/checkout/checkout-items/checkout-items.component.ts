import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';


@Component({
  selector: '[app-checkout-items]',
  templateUrl: './checkout-items.component.html',
  styleUrls: ['./checkout-items.component.scss']
})
export class CheckoutItemsComponent implements OnInit {


  @Input() product!:Product 

  constructor() { }

  ngOnInit(): void {

  }

}
