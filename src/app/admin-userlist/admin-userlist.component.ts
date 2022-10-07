import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public searchInput: string = ""
  public statusName: string = "Deactivate"


  constructor(private userService: UserService, private router:Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {this.users = data;})
  }

  deactivateUser(data: User) {
    data.active = !data.active 
    this.userService.update(data)
  }


  addUser() {
    this.router.navigate(['/adduser']);
  }


  



}
