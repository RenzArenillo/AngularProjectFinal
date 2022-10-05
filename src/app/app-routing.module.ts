import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutConfirmedComponent } from './checkout/checkout-confirmed/checkout-confirmed.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';
import { TesthomeComponent } from './testhome/testhome.component';
import { PendingOrdersPageComponent } from './pending-orders/pending-orders-page/pending-orders-page.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
