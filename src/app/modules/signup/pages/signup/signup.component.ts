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
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      birthdate: ['', [Validators.required]],
      interestsLists: [
        "Clothes"
      ],
      active: true,
      userType: "Customer"
    })
    this.signUpForm.get('birthdate')?.patchValue(this.formatDate(new Date()));

  }

  private formatDate(date: string | number | Date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('/');
  }


  submitButton(){  
      this.http.post<any>("http://localhost:3000/user",this.signUpForm.value)
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