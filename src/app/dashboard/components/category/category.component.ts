import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Category } from '../../../assets/models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  category!: Category;

  @Output() emittter = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  emit(category: Category){
    this.emittter.emit(category);
  }

}


