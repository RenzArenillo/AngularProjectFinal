import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product-item/product-item.component';



@NgModule({
  declarations: [
    CartPageComponent,
    CartItemComponent,
    ProductPageComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ProductModule { }
