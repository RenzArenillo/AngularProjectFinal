import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/assets/models/users';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit {
  @Input() user!: User;
  @Output() userEmitter = new EventEmitter();
  @Output() modalEmitter = new EventEmitter();
  editedUser!: User;
  profileForm: FormGroup;
  myDate: any;
  userBirthdate = '';
  constructor(formBuilder: FormBuilder) {
    this.profileForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.myDate = new Date(this.user.birthdate);
    this.userBirthdate = this.myDate.toISOString().substring(0, 10);
    this.editValue(this.user);
  }

  editValue(user: User) {
    this.profileForm.patchValue({
      firstName: user.firstName,
      middleName: user.middleName,
      lastName: user.lastName,
      number: '0' + user.mobileNumber,
      email: user.email,
      birthDate: formatDate(new Date(), this.userBirthdate, 'en'),
    });
  }

  submit() {
    const editedUser = {
      id: this.user.id,
      userName: this.user.userName,
      firstName: this.profileForm.get('firstName')?.value,
      middleName: this.profileForm.get('middleName')?.value,
      lastName: this.profileForm.get('lastName')?.value,
      mobileNumber: this.profileForm.get('number')?.value,
      email: this.profileForm.get('email')?.value,
      birthDate: this.profileForm.get('birthDate')?.value,
    };

    this.userEmitter.emit(editedUser);
  }

  modal(val: boolean) {
    this.modalEmitter.emit(val);
  }
}
