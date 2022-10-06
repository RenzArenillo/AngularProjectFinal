import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http: HttpClient) { }

  getPassword(): Observable<any>{
    const url = 'http://localhost:3000/users'
    return this.http.get<any>(url)
  }
}
