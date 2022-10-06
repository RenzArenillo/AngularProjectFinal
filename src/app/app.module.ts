import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckoutConfirmedComponent } from './checkout/checkout-confirmed/checkout-confirmed.component';
import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { TesthomeComponent } from './testhome/testhome.component';
import { CheckoutItemsComponent } from './checkout/checkout-items/checkout-items.component';
import { PendingOrdersItemsComponent } from './pending-orders/pending-orders-items/pending-orders-items.component';
import { PendingOrdersPageComponent } from './pending-orders/pending-orders-page/pending-orders-page.component';
import { AddUserComponent } from './admin-userlist/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckoutPageComponent,
    CheckoutItemsComponent,
    PendingOrdersPageComponent,
    PendingOrdersItemsComponent,
    TesthomeComponent,
    CheckoutConfirmedComponent,
    AdminUserlistComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
