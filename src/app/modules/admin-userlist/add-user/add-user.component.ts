import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/assets/models/users';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {



  usersForm: FormGroup
  productId:string | null= "";

  constructor(fb:FormBuilder, private userService: UserService, private router: Router, 
    private route: ActivatedRoute) {
    this.usersForm = fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      userPassword: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', [Validators.required]],
      middleName: [''],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      userType: ['', [Validators.required]],
      birthdate: ['', [Validators.required]]


    })

   }

  changeCategory(e:any) {
    console.log(e.value)
  }

  ngOnInit(): void {

  }


  submit() {
    const user = {
      userName: this.usersForm.get('userName')?.value,
      userPassword: this.usersForm.get('userPassword')?.value,
      firstName: this.usersForm.get('firstName')?.value,
      middleName: this.usersForm.get('middleName')?.value,
      lastName: this.usersForm.get('lastName')?.value,
      email: this.usersForm.get('email')?.value,
      mobileNumber: this.usersForm.get('mobileNumber')?.value,
      userType: this.usersForm.get('userType')?.value,
      birthdate: this.usersForm.get('birthdate')?.value,
      interestsLists: [
        ""
      ] ,
      active: true,
    }
      this.userService.create(user)

    this.router.navigate(['userlist'])

  }

  goBack() {
    this.router.navigate(['userlist'])
  }



}
