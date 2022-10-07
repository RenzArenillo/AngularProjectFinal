import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPwComponent } from '../forget-pw/forget-pw.component';

// interface Forget{
//   password: string
// }

@Component({
  selector: 'app-forget-redir',
  templateUrl: './forget-redir.component.html',
  styleUrls: ['./forget-redir.component.scss']
})

export class ForgetRedirComponent implements OnInit {

  uname: any;
  nameStr? = ''
  emailStr? = ''

  constructor(private router: Router, private http: HttpClient) { } 

  ngOnInit(): void {

  }

  loginRedirect(){
    this.router.navigate(['login'])
  }

  getPassword(){
    this.nameStr = ForgetPwComponent.uname
    this.emailStr = ForgetPwComponent.uemail

    const url = 'http://localhost:3000/users?userName='+this.nameStr+'&'+this.emailStr
    this.http.get<any>(url).subscribe(res=>{res.find((a:any)=>{
        this.uname = a.userName
      });
    })
    console.log(url)
  }

}
