import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { OrdersService } from 'src/app/orders.service';
import { PassOrdersService } from 'src/app/pass-orders.service';

@Component({
  selector: 'app-checkout-page',  
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {


  total = 0
  quantity = 0
  dateToday = new Date().toJSON().slice(0,10).replace(/-/g,'/');


  public products : Product[] = [];

  constructor(private orderService: OrdersService, private route:ActivatedRoute, 
    private listService:PassOrdersService, private router:Router) { 
    this.products = this.listService.retrieveList()
  }

  ngOnInit(): void {
    if (this.products.length > 0 ) {
      const { Quantity, Price } = this.products.reduce((acc, item) => {
        acc.Quantity += item.productQuantity;
        acc.Price += item.productPrice * item.productQuantity;
        return acc;
      }, {
        Quantity: 0,
        Price: 0
      });
      this.quantity = Quantity;
      this.total = Price;
    } 


  }
  
  createOrder() {
    const order = {
      userId: "USER001",
      orderedItems: this.products,
      orderQuantity: this.quantity,
      orderTotalPrice: this.total,
      orderDate: this.dateToday,
      orderStatus: "Pending"
    }
    this.orderService.create(order)
    this.listService.saveList("")
    this.router.navigate(['/confirmed']);

  }

}
