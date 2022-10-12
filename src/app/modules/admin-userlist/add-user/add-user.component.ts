import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {



  signUpForm!: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(5)]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  submitButton(){  
      this.http.post<any>("http://localhost:3000/users",this.signUpForm.value)
      .subscribe(res=>{
          const user = this.signUpForm.pristine ||
            (this.signUpForm.value.userName === ' ' || this.signUpForm.value.email === ' ' || 
              this.signUpForm.value.mobileNumber === ' ' || this.signUpForm.value.userPassword === ' ' || this.signUpForm.value.confirmPassword === ' ') 
          if(!user){
            if(this.signUpForm.value.userPassword != this.signUpForm.value.confirmPassword){
              alert('Passwords do not match.')
            }else{
              alert('Signup successful! Redirecting you to login.');
              this.signUpForm.reset()
              this.router.navigate(["login"])
            }
          }else {
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
