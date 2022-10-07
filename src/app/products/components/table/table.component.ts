import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/assets/models/product';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() products: Product[] = []
  @Output() emittter = new EventEmitter();

  sortBy: string = 'productId';
  constructor() { }

  ngOnInit(): void {
  }

  sort(sortBy: string){
    alert("sorted by "+ sortBy);
    this.sortBy = sortBy;
  }

  delete(id:any){
    this.emittter.emit({productId : id, action:"delete"});
  }

  edit(id:any){
    this.emittter.emit({productId : id, action:"edit"});
  }
}
