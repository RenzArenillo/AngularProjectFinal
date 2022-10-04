import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';
import { PendingOrdersPageComponent } from './pending-orders/pending-orders-page/pending-orders-page.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent
  },
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
