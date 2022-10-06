import { Component, OnInit } from '@angular/core';
import { User } from '../models/users';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-userlist',
  templateUrl: './admin-userlist.component.html',
  styleUrls: ['./admin-userlist.component.scss']
})
export class AdminUserlistComponent implements OnInit {

  public users : User[] = [];
  public selectedUser: User | undefined

  constructor(private userService: UserService, private router:Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {this.users = data;})
  }

  deactivateUser(data: User) {
    // var updateUser: User = data
    data.active = false
    this.userService.update(data)
  }


  addUser() {
    this.router.navigate(['/confirmed']);
  }
  // deactivateUser(id?:number) {

  //   // for (let i = 0; i < this.users.length; i++) {
  //   //   if(this.users[i]["id"] == id){
  //   //     this.selectedUser = this.users[i];
  //   //   } else {}
  //   // }
  //   // const userDeactivate = {
  //   //   id: this.selectedUser?.id,
  //   //   userName: this.selectedUser?.userName,
  //   //   userPassword: this.selectedUser?.userPassword,
  //   //   firstName: this.selectedUser?.firstName,
  //   //   middleName: this.selectedUser?.middleName,
  //   //   lastName: this.selectedUser?.lastName,
  //   //   mobileNumber: this.selectedUser?.mobileNumber,
  //   //   email: this.selectedUser?.email,
  //   //   birthdate: this.selectedUser?.birthdate,
  //   //   interestsLists: this.selectedUser?.interestsLists,
  //   //   active: false
  //   // }
  //   this.userService.update(userDeactivate)
  // }

}
