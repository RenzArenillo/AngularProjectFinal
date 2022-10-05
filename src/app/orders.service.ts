import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from './models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getOrders(userId:string): Observable<Order[]> {

    return this.http.get<Order[]>(`${environment.url}/order`).pipe<Order[]>(  
      map((data:Order[]) => {

        return data.filter(x => x.orderStatus === "Pending" && x.userId === userId)
      }
    ))
  }

  create(order:Order) {
    return this.http.post(`${environment.url}/order`, order).subscribe()
  }
}
