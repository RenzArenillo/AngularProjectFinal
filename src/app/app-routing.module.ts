import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutConfirmedComponent } from './checkout/checkout-confirmed/checkout-confirmed.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';

import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { PendingOrdersPageComponent } from './pending-orders/pending-orders-page/pending-orders-page.component';
import { TesthomeComponent } from './testhome/testhome.component';
import { AddUserComponent } from './admin-userlist/add-user/add-user.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: TesthomeComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent,
  },
    // children: [
      {
        path: "confirmed",
        component: CheckoutConfirmedComponent
      },
    // ]

  {
    path: "orders",
    component: PendingOrdersPageComponent
  },
  {
    path: "userlist",
    component: AdminUserlistComponent
  },
  {
    path: "adduser",
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
