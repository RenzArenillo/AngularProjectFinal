import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './pages/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { SearchPipe } from '../admin-userlist/search.pipe';


@NgModule({
  declarations: [
    SignupComponent,
    // SearchPipe
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
})
export class SignupModule { }
