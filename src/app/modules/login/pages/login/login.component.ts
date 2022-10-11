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
  userStr?: any

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName: [''],
      userPassword: ['']
    })
  }

  submitLogin(){

    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = this.loginForm.pristine ||
      (this.loginForm.value.userName?.trim() === '' || this.loginForm.value.confirmPassword?.trim === '') 
      if(!user){
        const acc = res.find((a:any)=>{
            return a.userName === this.loginForm.value.userName && a.userPassword === this.loginForm.value.userPassword
          });
        if(!acc){
          alert('Passwords do not match.')
        }else{
          alert('Login successful! Redirecting you to login.');
          this.userStr = this.http.get<any>("http://localhost:3000/users")
          .subscribe(a=>{a.find((b:any)=>{b.userName === this.loginForm.value.userName})})
          console.log(this.userStr)
          this.loginForm.reset()
          // this.router.navigate(["login"])
          // console.log(this.loginForm.value)
        }
      }else{
        alert("Please fill up all the fields.")
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
