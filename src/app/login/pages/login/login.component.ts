import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      userPassword: ['']
    })
  }

  submitLogin(){
    // alert('Login button works')
    // console.log(this.loginForm.value)
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName === this.loginForm.value.userName && a.userPassword === this.loginForm.value.userPassword 
        && !(this.loginForm.pristine) && !(this.loginForm.touched)
      });
      if(user){
        alert('Login Successful');
        this.loginForm.reset()
        // this.router.navigate(["home"])
      }else{
        alert("The username or password you entered is incorrect, or you didn't fill up all the fields.")
        this.loginForm.reset()
      }
    },err=>{
      alert("Something went wrong.")
    })
  }

  signUpButton(){
    this.router.navigate(['sign-up'])
  }

  forgotPassword(){
    // alert('Forgot password button works')
    this.router.navigate(['forget-pw'])
  }

}
