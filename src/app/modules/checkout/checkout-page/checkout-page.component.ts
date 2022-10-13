import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/assets/models/product';
import { ProductRenz } from 'src/app/assets/models/productRenz';
import { OrdersService } from 'src/app/orders.service';
import { PassOrdersService } from 'src/app/pass-orders.service';
import { ProductsService } from '../../products/services/products.service';

@Component({
  selector: 'app-checkout-page',  
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  checkoutForm: FormGroup

  total = 0
  quantity = 0
  dateToday = new Date().toJSON().slice(0,10).replace(/-/g,'/');
  unitsSold = 0
  holder = 0



  public products : ProductRenz[] = [];

  constructor(private orderService: OrdersService, private route:ActivatedRoute, 
    private listService:PassOrdersService, private router:Router, fb:FormBuilder,
    private productsService: ProductsService) { 
    this.products = this.listService.retrieveList()
    this.checkoutForm = fb.group({
      address: [{value: '', disabled: !this.products.length}, Validators.required],
      paymentMethod: [{value: '', disabled: !this.products.length}, Validators.required]
    })
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
      orderAddress: this.checkoutForm.get('address')?.value,
      orderDate: this.dateToday,
      paymentMethod: this.checkoutForm.get('paymentMethod')?.value,
      orderStatus: "Pending"
    }
    this.orderService.create(order)
    this.listService.saveList("")

    for (var data of this.products) {
      console.log("First: " + data.productQuantity)
      this.holder = data.productQuantity
      this.productsService.getProduct(data.productId).subscribe(product => {
        product.unitsSold = product.unitsSold + this.holder
        console.log("Second: " + this.holder)


        this.productsService.updateSold(product)
      })
    }

    alert("Order Confirmed!")
    this.router.navigate(['/orders']);

  }


  cancelOrder() {
    this.listService.saveList("")
    this.router.navigate(['/home']);
  }

}
