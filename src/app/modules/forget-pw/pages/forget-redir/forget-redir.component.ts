import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ForgetPwComponent } from '../forget-pw/forget-pw.component';

@Component({
  selector: 'app-forget-redir',
  templateUrl: './forget-redir.component.html',
  styleUrls: ['./forget-redir.component.scss']
})

export class ForgetRedirComponent implements OnInit {

  // uname: any;
  nameStr? = ''
  emailStr? = ''
  pwStr? = ''

  constructor(private router: Router, private http: HttpClient) { } 

  ngOnInit(): void {

  }

  loginRedirect(){
    this.router.navigate(['login'])
  }

  getPassword(){
    this.nameStr = ForgetPwComponent.uname
    this.emailStr = ForgetPwComponent.uemail
    this.pwStr = ForgetPwComponent.upass
  }

}
