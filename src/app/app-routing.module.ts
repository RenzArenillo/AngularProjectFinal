import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutConfirmedComponent } from './checkout/checkout-confirmed/checkout-confirmed.component';
import { CheckoutPageComponent } from './checkout/checkout-page/checkout-page.component';

import { AdminUserlistComponent } from './admin-userlist/admin-userlist.component';
import { PendingOrdersPageComponent } from './pending-orders/pending-orders-page/pending-orders-page.component';
import { TesthomeComponent } from './testhome/testhome.component';
import { AddUserComponent } from './admin-userlist/add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ForgetPwComponent } from './forget-pw/pages/forget-pw/forget-pw.component';
import { ForgetRedirComponent } from './forget-pw/pages/forget-redir/forget-redir.component';
import { LoginComponent } from './login/pages/login/login.component';
import { SignupComponent } from './signup/pages/signup/signup.component';
import { CartPageComponent } from './modules/product/pages/cart-page/cart-page.component';
import { ProductPageComponent } from './modules/product/pages/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // {
  //   path: "",
  //   redirectTo: "home",
  //   pathMatch: "full"
  // },
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
  },
  //Aldrin
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  //Roi
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forget-pw',
    component: ForgetPwComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'forget-pw/redirect',
    component: ForgetRedirComponent
  },
  //Chin
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  // },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'cart',
    component: CartPageComponent
  },
  // {
  //   path: 'product',
  //   component: ProductPageComponent
  // }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
