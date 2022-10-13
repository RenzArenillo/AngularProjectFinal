import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/modules/products/services/cart.service';

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
  constructor(public cartService:CartService) {}

  ngOnInit(): void {}


  addToCart(prod: any) {
    this.cartEmitter.emit(this.cartService.addtoCart(prod));
  }

  emit(product: Product) {
    this.emitter.emit(product);
  }
}
