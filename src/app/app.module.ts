import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './admin-userlist/add-user/add-user.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { SearchPipe } from './admin-userlist/search.pipe';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CheckoutConfirmedComponent } from './checkout/checkout-confirmed/checkout-confirmed.component';
import { CheckoutItemsComponent } from './checkout/checkout-items/checkout-items.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';
import { CategoryComponent } from './dashboard/components/category/category.component';
import { ProductModalComponent } from './dashboard/components/product-modal/product-modal.component';
import { ProductComponent } from './dashboard/components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetPwModule } from './forget-pw/forget-pw.module';
import { LoginModule } from './login/login.module';
import { PendingOrdersItemsComponent } from './pending-orders/pending-orders-items/pending-orders-items.component';
import { PendingOrdersPageComponent } from './pending-orders/pending-orders-page/pending-orders-page.component';
import { TableComponent } from './products/components/table/table.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';
import { SignupModule } from './signup/signup.module';
import { TesthomeComponent } from './testhome/testhome.component';
import { FlexLayoutModule } from '@angular/flex-layout';


//test
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
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
    CheckoutConfirmedComponent,
    AdminUserlistComponent,
    AddUserComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule, 
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
    FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
