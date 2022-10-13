import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/core/services/order/orders.service';
import { Order } from 'src/app/models/order';

@Component({
  selector: 'app-pending-orders-page',
  templateUrl: './pending-orders-page.component.html',
  styleUrls: ['./pending-orders-page.component.scss'],
})
export class PendingOrdersPageComponent implements OnInit {

  public orders: Order[] = []

  user!: any



  constructor(private orderService: OrdersService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    this.orderService.getOrders((this.user.id!).toString()).subscribe(data => {this.orders = data;})
  }

  allOrders() {
    this.orderService.getOrders((this.user.id!).toString()).subscribe(data => {this.orders = data;})
  }

  filteredOrders(filter:string) {
    this.orderService.getFilteredOrders((this.user.id!).toString(), filter).subscribe(data => {this.orders = data;})
  }


}
