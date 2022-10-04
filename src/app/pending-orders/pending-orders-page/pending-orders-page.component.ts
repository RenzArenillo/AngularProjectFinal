import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-pending-orders-page',
  templateUrl: './pending-orders-page.component.html',
  styleUrls: ['./pending-orders-page.component.scss'],
})
export class PendingOrdersPageComponent implements OnInit {

  public orders: Order[] = []

  constructor(private orderService: OrdersService) {
  }


  ngOnInit(): void {
    this.orderService.getOrders().subscribe(data => {this.orders = data;})
    console.log(this.orders)
  }
}
