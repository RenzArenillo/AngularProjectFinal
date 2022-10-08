import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  env ="http://localhost:3000/products"
  
  public getProducts() {
    return this.http.get(this.env).pipe(
      map((product:any) => {
        return product
      })
    );
}}
