import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
            (this.signUpForm.value.userName.trim() === '' || this.signUpForm.value.email.trim() === '' || 
              this.signUpForm.value.mobileNumber.trim() === '' || this.signUpForm.value.userPassword.trim() === '' || this.signUpForm.value.confirmPassword.trim === '') 
          if(!user){
            if(this.signUpForm.value.userPassword != this.signUpForm.value.confirmPassword){
              alert('Passwords do not match.')
            }else{
              alert('Signup successful! Redirecting you to login.');
              this.signUpForm.reset()
              this.router.navigate(["login"])
              console.log(this.signUpForm.value)
            }
          }else {
            alert("Please fill up all the fields.")
            console.log(this.signUpForm.value)
          }
      },err=>{
        alert("Something went wrong.")
      })
    }

  loginRedirect(){
    this.router.navigate(['login'])
  }

}
