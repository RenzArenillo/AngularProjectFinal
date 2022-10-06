import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/assets/models/product';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss']
})
export class ProductModalComponent implements OnInit {

  @Input() selectedProduct: Product | undefined;
  @Output() emitter = new EventEmitter();
  constructor() {
    if(this.selectedProduct != null){
     console.log("emitting from modal "+ this.selectedProduct)
    }
  }

  ngOnInit(): void {
  }

  close(){
    this.emitter.emit(false);
  }
}
