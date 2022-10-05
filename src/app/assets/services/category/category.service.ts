import { Injectable } from '@angular/core';
import { Category } from 'src/app/assets/models/category';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Category[] = [];
  private _jsonURL = 'http://localhost:3000/categories';
  constructor(private http: HttpClient) {

    this.getJSON().subscribe((data) => {
      this.categories = data; // returns data
      console.log(this.categories);
    });

    console.log(this.getCategories); // returns empty array
  }

  public getJSON(): Observable<Category[]> {
    return this.http.get<Category[]>(this._jsonURL);
  }

  getCategories(): Observable<Category[]>  {
    return this.http.get<Category[]>(this._jsonURL);
  }
}
