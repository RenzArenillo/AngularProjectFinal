import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPwRoutingModule } from './forget-pw-routing.module';
import { ForgetPwComponent } from './pages/forget-pw/forget-pw.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetRedirComponent } from './pages/forget-redir/forget-redir.component';


@NgModule({
  declarations: [
    ForgetPwComponent,
    ForgetRedirComponent
  ],
  imports: [
    CommonModule,
    ForgetPwRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForgetPwModule { }
