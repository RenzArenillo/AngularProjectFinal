import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Product } from 'src/app/assets/models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  env ="http://localhost:3000/products"
  
  public getProducts() {
    return this.http.get(this.env).pipe(
      map((product:any) => {
        return product
      })
    );
}

getProduct(id:number): Observable<Product> {
  return this.http.get<Product>(`${this.env}/${id}`)
}

delete(id:number) {
  return this.http.delete(`${this.env}/${id}`)
}

create(product:Product) {
  return this.http.post(`${this.env}`, product).subscribe()
}

update(product:Product, id:string| null) {
  return this.http.put(`${this.env}/${id}`, product).subscribe()
}
}