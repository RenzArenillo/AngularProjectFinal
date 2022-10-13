import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRenz } from 'src/app/assets/models/productRenz';
import { PassOrdersService } from 'src/app/pass-orders.service';

@Component({
  selector: 'app-testhome',
  templateUrl: './testhome.component.html',
  styleUrls: ['./testhome.component.scss']
})
export class TesthomeComponent implements OnInit {

  public products : ProductRenz[] = [
    { productId: 1,
      productName: 'Item54',
      productQuantity: 3,
      productPrice: 50,
      productImage: 'https://image.shutterstock.com/image-photo/soccer-ball-on-isolated-260nw-535561051.jpg'
    }, 
    {
      productId: 14,
      productName: 'Item2',
      productQuantity: 2,
      productPrice: 210,
      productImage: 'https://image.shutterstock.com/image-photo/laptop-screen-mockup-digital-device-600w-1891189966.jpg'
    },
    {
      productId: 15,
      productName: 'Item3',
      productQuantity: 1,
      productPrice: 460,
      productImage: 'https://image.shutterstock.com/image-photo/blue-denim-jacket-isolated-over-260nw-310155074.jpg'
    }
  ];
  constructor(private router: Router, private passService: PassOrdersService) { }

  ngOnInit(): void {
  }

  checkout() {
    this.passService.saveList(this.products)
    this.router.navigate(['/checkout'])
  }

}
