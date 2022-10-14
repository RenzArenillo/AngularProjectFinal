import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { User } from 'src/app/models/users';
import { ProfileService } from '../../services/profile.service';

// export interface Fruit {
//   name: string;
// }

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
  ff: FormArray;
  constructor(private fb: FormBuilder, profileService: ProfileService) {
    this.profileForm = fb.group({
      firstName: ['', [Validators.required]],
      middleName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      number: ['', [Validators.required]],
      email: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      interestsLists: this.fb.array([''])
    });
    this.ff = this.profileForm.get('interestsLists') as FormArray;
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
      number:  user.mobileNumber,
      email: user.email,
      birthDate: formatDate(new Date(), this.userBirthdate, 'en'),
      interestsLists: user.interestsLists
    });
  }

  // addInterest(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our interest
  //   if (value) {
  //     this.ff.push({name: value});
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // removeInterest(i:number){
  //    this.ff.removeAt(this.ff.value.findIndex(i))
  // }

  addInterestForm() {
    this.ff.push(new FormControl())
  }

  // deleteInterest(i:any) {
  //   this.ff.removeAt(i)
  // }

  addNewInterest() {
    (this.profileForm.get('interestsLists') as FormArray).push(
      new FormControl()
    );
  }
  get interests():FormArray{
    return this.profileForm.get("interestsLists") as FormArray
  }
 
  newInterest():FormGroup{
    return this.fb.group({interest: ''})
  }

  addInterest(){
    this.interests.push(this.newInterest())
  }

  removeInterest(i:number){
    this.interests.removeAt(i);
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
      interestsLists: this.profileForm.get('interestsLists')?.value
    };

    this.userEmitter.emit(editedUser);
  }

  modal(val: boolean) {
    this.modalEmitter.emit(val);
  }


  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();

  //   // Add our fruit
  //   if (value) {
  //     this.ff.push({name: value});
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // remove(i:number){
  //   this.ff.removeAt(i)
  // }

} 
