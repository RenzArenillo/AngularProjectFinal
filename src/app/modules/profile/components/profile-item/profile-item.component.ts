import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/assets/models/users';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  user!: any;
  userUpdate: User = {
    id: 0,
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobileNumber: 0,
    email: '',
    birthdate: new Date(),
    interestsLists: [],
    active: true,
    userType: '',
    userPassword: ''
  };
  showModal = false;
  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userUpdate.userName = this.user.userName;
    this.userUpdate.interestsLists = this.user.interestsLists;
    this.userUpdate.active = this.user.active;
    this.userUpdate.userType = this.user.userType ? this.user.userType : 'customer';
    this.userUpdate.userPassword = this.user.userPassword;
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  updateUser(user: {
    id: number;
    userName: string;
    firstName: string;
    middleName: string;
    lastName: string;
    mobileNumber: number;
    email: string;
    birthDate: any;
  }) {
    this.showModal = false;

    this.userUpdate.id = user.id;
    this.userUpdate.firstName = user.firstName;
    this.userUpdate.middleName = user.middleName;
    this.userUpdate.lastName = user.lastName;
    this.userUpdate.mobileNumber = user.mobileNumber;
    this.userUpdate.email = user.email;
    this.userUpdate.birthdate = user.birthDate;

    console.log(this.userUpdate);
    // chin pakigawan ng service to
    // this.userService.update(this.userUpdate, user.id)
    // after sa service,uncomment ung codes below this
    // localStorage.clear();
    // localStorage.setItem('user', this.userUpdate);
  }
}
