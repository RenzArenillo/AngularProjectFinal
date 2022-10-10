import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileItemComponent } from './components/profile-item/profile-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileItemComponent
  ],
  imports: [
    CommonModule,

    RouterModule
  ]
})
export class ProfileModule { }
