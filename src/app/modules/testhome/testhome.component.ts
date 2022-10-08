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
    },
    {
      productId: '2823',
      productName: 'Item6',
      productQuantity: 4,
      productPrice: 20,
      productCategory: 'Category2'
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
