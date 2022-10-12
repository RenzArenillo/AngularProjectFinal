import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Category } from 'src/app/assets/models/category';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  slider: any;
  defaultTransform: any;
  @Input()
  category!: Category;

  @Output() emittter = new EventEmitter();
  categories: Category[] = [];
  constructor() { }

  ngOnInit(): void {
    this.slider = document.getElementById("slider");
    this.defaultTransform=0
  }

  emit(category: Category){
    this.emittter.emit(category);
  }

}


