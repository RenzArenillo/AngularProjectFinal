import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/assets/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;

  @Input() displayType: string | undefined;

  @Output() cartEmitter = new EventEmitter();
  @Output() emitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product) {
    this.cartEmitter.emit(product);
  }

  emit(product: Product) {
    this.emitter.emit(product);
  }
}
