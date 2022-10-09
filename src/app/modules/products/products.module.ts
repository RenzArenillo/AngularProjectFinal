import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { ProductRoutingModule } from './products-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CartPageComponent } from './cart-page/cart-page.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  declarations: [
    CartPageComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProductModule { } 
