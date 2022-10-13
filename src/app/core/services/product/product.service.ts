import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  private _jsonURL = 'http://localhost:3000/products';
  constructor(private http: HttpClient) {

    this.getJSON().subscribe((data) => {
      this.products = data;
    });
  }

  public getJSON(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL);
  }

  getProducts(): Observable<Product[]>  {
    return this.http.get<Product[]>(this._jsonURL);
  }
}
