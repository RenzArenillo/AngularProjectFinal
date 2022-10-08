import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/app/assets/models/order';

@Component({
  selector: '[app-pending-orders-items]',
  templateUrl: './pending-orders-items.component.html',
  styleUrls: ['./pending-orders-items.component.scss']
})
export class PendingOrdersItemsComponent implements OnInit {

  @Input() order!:Order 

  constructor() { }

  ngOnInit(): void {
  }

}
