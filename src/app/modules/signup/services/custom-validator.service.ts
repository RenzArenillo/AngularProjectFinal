import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor(private http: HttpClient) { }

  validateUsernameNotTaken(control: AbstractControl) {
    return this.checkUsernameNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { usernameTaken: true };
      })
    );
  }

  checkUsernameNotTaken(username: string) {
    return this.http.get<any>("http://localhost:3000/user").pipe(
      map((usernameList: Array<any>) =>
        usernameList.filter(user => user.userName === username)
      ),
      map(users => !users.length)
    );
  }
}
