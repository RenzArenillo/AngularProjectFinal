import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPwRoutingModule } from './forget-pw-routing.module';
import { ForgetPwComponent } from './pages/forget-pw/forget-pw.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgetPwComponent
  ],
  imports: [
    CommonModule,
    ForgetPwRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForgetPwModule { }
