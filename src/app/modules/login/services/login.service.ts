import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  env = 'http://localhost:3000/user';

  user: User | any;
  constructor(private http: HttpClient) {}

  getUser(): User | any {
    return this.user;
  }

  setUser(id: string) {
    this.http
      .get<User>(`${this.env}/${id}`)
      .subscribe((user) => this.setUser2(user));
  }

  setUser2(user: User) {
    this.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  }
}
