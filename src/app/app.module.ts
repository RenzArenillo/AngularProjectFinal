import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminUserlistComponent } from './modules/admin-userlist/admin-userlist.component';
import { SearchPipe } from './modules/admin-userlist/search.pipe';
import { AddUserComponent } from './modules/admin-userlist/add-user/add-user.component';
import { CheckoutItemsComponent } from './modules/checkout/checkout-items/checkout-items.component';
import { CheckoutPageComponent } from './modules/checkout/checkout-page/checkout-page.component';
import { CategoryComponent } from './modules/dashboard/components/category/category.component';
import { ProductModalComponent } from './modules/dashboard/components/product-modal/product-modal.component';
import { ProductComponent } from './modules/dashboard/components/product/product.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ForgetPwModule } from './modules/forget-pw/forget-pw.module';
import { LoginModule } from './modules/login/login.module';
import { PendingOrdersItemsComponent } from './modules/pending-orders/pending-orders-items/pending-orders-items.component';
import { PendingOrdersPageComponent } from './modules/pending-orders/pending-orders-page/pending-orders-page.component';
import { TableComponent } from './modules/products/components/table/table.component';
import { ProductsComponent } from './modules/products/products.component';
import { FooterComponent } from './modules/shared/footer/footer/footer.component';
import { SharedModule } from './modules/shared/shared.module';
import { SignupModule } from './modules/signup/signup.module';
import { TesthomeComponent } from './modules/testhome/testhome.component';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './modules/products/cart-page/cart-page.component';
import { ProductModule } from './modules/products/products.module';
import { CarouselComponent } from './modules/dashboard/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductComponent,
    CategoryComponent,
    ProductComponent,
    ProductsComponent,
    FooterComponent,
    ProductModalComponent,
    TableComponent,
    CheckoutPageComponent,
    CheckoutItemsComponent,
    PendingOrdersPageComponent,
    PendingOrdersItemsComponent,
    TesthomeComponent,
    AdminUserlistComponent,
    AddUserComponent,
    SearchPipe,
    CarouselComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LoginModule,
    ForgetPwModule,
    SignupModule,
    SharedModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
