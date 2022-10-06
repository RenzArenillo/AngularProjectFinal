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

  constructor(private router: Router, private http: HttpClient) { }
  // str = ''

  // password?:Forget
  // data?:ForgetPwComponent

  ngOnInit(): void {
    // this.str = this.data?.getName()
  }

  loginRedirect(){
    this.router.navigate(['login'])
  }

  // getPassword(){
  //   return this.http.get<any>("http://localhost:3000/users")
  //   .subscribe(res=>{res.find((a:any)=>{
  //       return 
  //     });
  //   })
  // }

}
