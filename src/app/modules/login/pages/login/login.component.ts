import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: string = '';
  user2?: User;
  userStr?: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  submitLogin() {
    this.http.get<any>('http://localhost:3000/user').subscribe((res) => {
      const user =
        this.loginForm.pristine ||
        this.loginForm.value.userName?.trim() === '' ||
        this.loginForm.value.confirmPassword?.trim === '';
      if (!user) {
        const acc = res.find((a: any) => {
          if (
            a.userName === this.loginForm.value.userName &&
            a.userPassword === this.loginForm.value.userPassword
          ) {
            this.user = a.id;
            this.loginService.setUser(this.user);
          }
          return (
            a.userName === this.loginForm.value.userName &&
            a.userPassword === this.loginForm.value.userPassword
          );
        });
        if (!acc) {
          alert('Passwords do not match.');
        } else {
          alert('Login successful! Redirecting you to login.');
          this.userStr = this.http
            .get<any>('http://localhost:3000/user')
            .subscribe((a) => {
              a.find((b: any) => {
                b.userName === this.loginForm.value.userName;
              });
            });
          console.log(this.userStr);
          this.loginForm.reset();
          this.router.navigate(["dashboard"])
        }
      } else {
        alert('Please fill up all the fields.');
      }
    });
  }

  signUpButton() {
    this.router.navigate(['sign-up']);
  }

  forgotPassword() {
    this.router.navigate(['forget-pw']);
  }
}
