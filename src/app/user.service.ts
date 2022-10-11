import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './assets/models/users';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(`${environment.url}/user`).pipe(  
      map((data:any) => {
        return data
      }
    ))
  }

  create(user:User) {
    return this.http.post(`${environment.url}/user`, user).subscribe()
  }

  update(user:User) {
    return this.http.patch(`${environment.url}/user/${user.id}`, user).subscribe()
  }

  updateStatus(user:User): Observable<any> {
    return this.http.patch(`${environment.url}/user/${user.id}`, user)
  }
}
