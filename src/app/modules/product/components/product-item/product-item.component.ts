import { Component, Input, OnInit } from '@angular/core';
import { ProductChin } from '../../../../assets/models/productChin';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product:ProductChin | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
