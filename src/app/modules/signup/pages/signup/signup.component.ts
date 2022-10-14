import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidatorService } from '../../services/custom-validator.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm!: FormGroup
  ff: FormArray 
  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient, private customValidator: CustomValidatorService) { 
    this.ff = this.signUpForm.get('listOfInterest') as FormArray
  }

  //from txt
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.minLength(5)], this.customValidator.validateUsernameNotTaken.bind(this.customValidator)],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
      birthdate: ['', [Validators.required]],
      listOfInterest: this.fb.array([])
    })
    this.ff = this.signUpForm.get('listOfInterest') as FormArray
  }
  //

  submitButton(){ 
    //added from txt
    const user = {
      firstName: this.signUpForm.get('firstName')?.value,
      middleName: this.signUpForm.get('middleName')?.value,
      lastName: this.signUpForm.get('lastName')?.value,
      userName: this.signUpForm.get('userName')?.value,
      email: this.signUpForm.get('email')?.value,
      mobileNumber: this.signUpForm.get('mobileNumber')?.value,
      userPassword: this.signUpForm.get('userPassword')?.value,
      birthdate: this.signUpForm.get('birthdate')?.value,
      interestsLists: this.signUpForm.get('listOfInterest')?.value,
      active: true,
      userType: "Customer"
    }
      this.http.post<any>("http://localhost:3000/user",user)
      .subscribe(res=>{
          const user = this.signUpForm.pristine ||
            (this.signUpForm.value.userName.trim() === '' || this.signUpForm.value.email.trim() === '' || 
              this.signUpForm.value.mobileNumber.trim() === '' || this.signUpForm.value.userPassword.trim() === '' || this.signUpForm.value.confirmPassword.trim === '') 
          if(!user){
            if(this.signUpForm.value.userPassword != this.signUpForm.value.confirmPassword){
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