import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-pw',
  templateUrl: './forget-pw.component.html',
  styleUrls: ['./forget-pw.component.scss']
})
export class ForgetPwComponent implements OnInit {

  forgetForm: FormGroup

  constructor(fb: FormBuilder, private router: Router) { 
    this.forgetForm = fb.group({
      userName: '',
      userEmail: '',
      userNumber: ''
    })
  }

  ngOnInit(): void {
  }

  resetButton(){
    alert('Reset button works')
    console.log(this.forgetForm.value)
  }

  loginRedirect(){
    this.router.navigate(['login'])
  }

}
