import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { OrdersService } from 'src/app/orders.service';

@Component({
  selector: 'app-checkout-page',  
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {


  total = 0
  quantity = 0

  public products : Product[] = [
    {
      productId: '1000',
      productName: 'Item1',
      productQuantity: 1,
      productPrice: 50,
      productCategory: 'Category1'
    }, 
    {
      productId: '1033',
      productName: 'Item2',
      productQuantity: 2,
      productPrice: 200,
      productCategory: 'Category2'
    },
    {
      productId: '1823',
      productName: 'Item3',
      productQuantity: 1,
      productPrice: 150,
      productCategory: 'Category2'
    }
  ];

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
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
  
  createOrder() {
    const order = {
      userId: "USER201",
      orderedItems: this.products,
      orderQuantity: this.quantity,
      orderTotalPrice: this.total,
      orderStatus: "Pending"
    }
    this.orderService.create(order)
    //clear order after
  }


}
