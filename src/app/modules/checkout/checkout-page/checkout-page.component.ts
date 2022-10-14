import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OrdersService } from 'src/app/core/services/order/orders.service';
import { Cart } from 'src/app/models/cart';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/users';
import { CartService } from '../../products/services/cart.service';
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
  prevSold = 0
  user!: User
  orderId:string | null= "";
  params:boolean = true

  public products : Cart[] = [];

  constructor(private orderService: OrdersService, private route:ActivatedRoute, 
    private listService:CartService, private router:Router, fb:FormBuilder,
    private productsService: ProductsService) { 
      this.products = this.listService.retrieveList()

    this.checkoutForm = fb.group({
      address: [{value: '', disabled: !this.products.length}, Validators.required],
      paymentMethod: [{value: '', disabled: !this.products.length}, Validators.required]
    })
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user')|| '{}');
    
    console.log("Hello " + this.user.id)

    this.route.paramMap.subscribe(params => {
      this.orderId = params.get('id');
      if (this.orderId) {
        this.getProduct(parseInt(this.orderId))
      } else {
        this.params = false

      }
    })
    console.log(this.user)
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
  
  getProduct(id: number) {
    this.orderService.getOrder(id).subscribe(order => this.showOrder(order))
  }

  showOrder(order:Order) {
    this.products = order.orderedItems
    this.total = order.orderTotalPrice
    this.checkoutForm.patchValue({
      address: order.orderAddress,
      paymentMethod: order.paymentMethod
    })
  }
  createOrder() {
    const order = {
      userId: (this.user.id!).toString(),
      orderedItems: this.products,
      orderQuantity: this.quantity,
      orderTotalPrice: this.total,
      orderAddress: this.checkoutForm.get('address')?.value,
      orderDate: this.dateToday,
      paymentMethod: this.checkoutForm.get('paymentMethod')?.value,
      orderStatus: "Pending"
    }
    this.orderService.create(order)
    this.listService.removeAllCart()

    for (var data of this.products) {
      

      this.productsService.getProduct(data.productId).subscribe(product => {
        const productUpdate = {
          productId: product.productId,
          productName: product.productName,
          productPrice: product.productPrice,
          productCategory: product.productCategory,
          productImage: product.productImage,
          unitsSold: product.unitsSold + data.productQuantity,
        }
        this.productsService.update(productUpdate, product.id!.toString())

      })
    }
    
    alert("Order Confirmed!")
    this.router.navigate(['/orders']);

  }

  cancelOrder() {
    this.router.navigate(['/dashboard']);
  }

}
