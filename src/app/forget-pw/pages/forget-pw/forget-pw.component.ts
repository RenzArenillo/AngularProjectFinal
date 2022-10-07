import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  // upass?:string

  constructor(fb: FormBuilder, private router: Router, private http: HttpClient) { 
    this.forgetForm = fb.group({
      userName: [''],
      email: [''],
      mobileNumber: ['']
    })
  }

  ngOnInit(): void {
  }

  submitButton(){
    // alert('Reset button works')
    // console.log(this.forgetForm.value)
    this.http.get<any>("http://localhost:3000/users")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.userName === this.forgetForm.value.userName && a.email === this.forgetForm.value.email &&
        a.mobileNumber === this.forgetForm.value.mobileNumber
      });
      if(user){
        alert('Account found! Redirecting...');
        this.getName()
        this.getEmail()
        console.log(this.getName()+' '+this.getEmail())
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

}
