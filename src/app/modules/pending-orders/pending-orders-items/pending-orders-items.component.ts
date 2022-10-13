import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/assets/models/order';

@Component({
  selector: '[app-pending-orders-items]',
  templateUrl: './pending-orders-items.component.html',
  styleUrls: ['./pending-orders-items.component.scss']
})
export class PendingOrdersItemsComponent implements OnInit {

  @Input() order!:Order 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  view(id:string) {
    this.router.navigate(['checkout', id])

  }
}
