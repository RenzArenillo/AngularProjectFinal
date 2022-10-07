import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // public profile:Profile = [
  //   {
  //     //id: 34,
  //     username: 'Chinnie',
  //     firstname: 'Chin Mae',
  //     middlename: 'Anino',
  //     lastname: 'Gwan',
  //     email: 'chinmae.gwan@gmail.com',
  //     birthdate: 7-21-1998,
  //     listOfInterests: [
  //       "Painting",
  //       "Eating",
  //       "Sleeping"
  //     ]
  //   }
  // ]
  // constructor() { }
  
  // getProfile() {
  //   return this.profile
  // }

  // getProfile(id:number):Profile|undefined{
  //   return this.profile.find(this.profile => this.profile.id === id)
  // }


}

