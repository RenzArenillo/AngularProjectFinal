import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/assets/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input()
  product!: Product;

  @Output() emitter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit(product: Product){
    this.emitter.emit(product);
  }

}
