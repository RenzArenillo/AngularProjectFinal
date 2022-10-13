import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/assets/models/order';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-pending-orders-page',
  templateUrl: './pending-orders-page.component.html',
  styleUrls: ['./pending-orders-page.component.scss'],
})
export class PendingOrdersPageComponent implements OnInit {

  public orders: Order[] = []

  //input ito from somewhere
  user!: any



  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');

    this.orderService.getOrders(this.user.id).subscribe(data => {this.orders = data;})
  }

  allOrders() {
    this.orderService.getOrders(this.user.id).subscribe(data => {this.orders = data;})
  }

  filteredOrders(filter:string) {
    this.orderService.getFilteredOrders(this.user.id, filter).subscribe(data => {this.orders = data;})
  }
  //


}
