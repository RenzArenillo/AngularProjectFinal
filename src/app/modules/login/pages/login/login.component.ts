import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/assets/models/users';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      userPassword: [''],
    });
  }

  submitLogin() {
    this.http.get<any>('http://localhost:3000/user').subscribe(
      (res) => {
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
            this.loginForm.reset();
            this.router.navigate(['/dashboard']);
          }
        } else {
          alert('Please fill up all the fields.');
        }
      },
      (err) => {
        alert('Something went wrong.');
      }
    );
  }

  signUpButton() {
    this.router.navigate(['sign-up']);
  }

  forgotPassword() {
    // alert('Forgot password button works')
    this.router.navigate(['forget-pw']);
  }
}
