import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: [''],
      email: [''],
      mobileNumber: [''],
      userPassword: ['']
    })
  }

  submitButton(){
    // alert('Submit button works')
    // console.log(this.signUpForm.value)
    this.http.post<any>("http://localhost:3000/users",this.signUpForm.value)
    .subscribe(res=>{
      // alert('Sign up succesful! Redirecting you to login');
      // this.signUpForm.reset()
      // this.router.navigate(["login"])
        // const user = res.find((a:any)=>{
        //   return a.userName !== null && a.email !== null && a.mobileNumber !== null 
        //   && a.userPassword !== null
        // });
        const user = this.signUpForm.pristine || this.signUpForm.touched
        if(!user){
          alert('Signup successful! Redirecting you to login.');
          this.signUpForm.reset()
          this.router.navigate(["login"])
        }else{
          alert("Please fill up all the fields.")
        }
    },err=>{
      alert("Something went wrong.")
    })
  }

  loginRedirect(){
    this.router.navigate(['login'])
  }

}
