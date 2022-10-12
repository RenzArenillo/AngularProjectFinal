import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.scss']
})
export class ForgetPwComponent implements OnInit {

  forgetForm: FormGroup
  public static uname?:string
  public static uemail?:string
  public static upass?:string

  constructor(fb: FormBuilder, private router: Router, private http: HttpClient) { 
    this.forgetForm = fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
    })
  }

  ngOnInit(): void {
  }

  submitButton(){
    this.http.get<any>("http://localhost:3000/user")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        ForgetPwComponent.upass = a.userPassword
        return a.userName === this.forgetForm.value.userName && a.email === this.forgetForm.value.email &&
        a.mobileNumber === this.forgetForm.value.mobileNumber
      });
      console.log(user)
      if(user){
        alert('Account found! Redirecting...');
        this.getName()
        this.getEmail()
        this.router.navigate(['forget-pw/redirect'])
      }else{
        alert("The data you entered is not found in our records, or you didn't fill up all the fields.")
      }
    },err=>{
      alert("Something went wrong.")
    })
  }

  loginRedirect(){
    this.router.navigate(['login'])
  }

  public getName():string{
    ForgetPwComponent.uname = this.forgetForm.value.userName
    return this.forgetForm.value.userName
  }

  public getEmail():string{
    ForgetPwComponent.uemail = this.forgetForm.value.email
    return this.forgetForm.value.email
  }

  public getPassword():string|undefined{
    return ForgetPwComponent.upass
  }

}
