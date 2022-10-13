import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent implements OnInit {
  @Input() product: Product = {
    productName: '',
    productPrice: 0,
    productCategory: '',
    unitsSold: 0,
    productImage: '',
  };
  @Output() emitter = new EventEmitter();

  quantity: number = 0;

  dec() {
    this.changeQuantity(-1);
  }
  inc() {
    this.changeQuantity(+1);
  }

  changeQuantity(value: number) {
    this.quantity += value;
  }

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.emitter.emit(false);
  }
}
