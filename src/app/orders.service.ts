import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './assets/models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getOrders(userId:string): Observable<Order[]> {

    return this.http.get<Order[]>(`${environment.url}/order`).pipe<Order[]>(  
      map((data:Order[]) => {
        return data.filter(x => x.userId === userId)
      }
    ))
  }
  getFilteredOrders(userId:string, filter:string): Observable<Order[]> {

    return this.http.get<Order[]>(`${environment.url}/order`).pipe<Order[]>(  
      map((data:Order[]) => {
        return data.filter(x => x.orderStatus === filter && x.userId === userId)
      }
    ))
  }

  create(order:Order) {
    return this.http.post(`${environment.url}/order`, order).subscribe()
  }

  getOrder(id:number): Observable<Order> {
    return this.http.get<Order>(`${environment.url}/order/${id}`)
  }
}
