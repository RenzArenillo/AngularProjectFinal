import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/assets/models/users';
import { UserService } from 'src/app/user.service';





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

  search(input:String) {
    this.userService.getUsers().subscribe((users) => {
      this.users = users.filter((x: { userName: { toLowerCase: () => String[]; }; firstName: { toLowerCase: () => String[]; }; lastName: { toLowerCase: () => String[]; }; }) => {return x.userName.toLowerCase().includes(input) ||
        x.firstName.toLowerCase().includes(input) ||
        x.lastName.toLowerCase().includes(input)});
    });      
    
  }
  
  



}
