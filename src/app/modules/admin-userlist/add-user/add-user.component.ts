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
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]

    })

   }

  changeCategory(e:any) {
    console.log(e.value)
  }

  ngOnInit(): void {

  }


  submit() {
    const user = {
      userType: this.usersForm.get('userName')?.value,
      userName: this.usersForm.get('userName')?.value,
      userPassword: this.usersForm.get('userPassword')?.value,
      firstName: this.usersForm.get('firstName')?.value,
      middleName: this.usersForm.get('middleName')?.value,
      lastName: this.usersForm.get('lastName')?.value,
      email: this.usersForm.get('email')?.value,
      mobileNumber: this.usersForm.get('mobileNumber')?.value,
      birthdate: new Date(1998/11/11),
      interestsLists: [
        "any",
        "any"
      ] ,
      active: true
    }
      this.userService.create(user)

    this.router.navigate(['userlist'])

  }

  goBack() {
    this.router.navigate(['userlist'])
  }




}
