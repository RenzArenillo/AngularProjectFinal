import { Component, OnInit } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

@Component({
  selector: 'app-profile-item',
  templateUrl: './profile-item.component.html',
  styleUrls: ['./profile-item.component.scss'],
})
export class ProfileItemComponent implements OnInit {
  user!: any;
  constructor() {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.user)
  }
}
