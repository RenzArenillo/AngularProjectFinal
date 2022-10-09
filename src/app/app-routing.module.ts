import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminUserlistComponent } from './modules/admin-userlist/admin-userlist.component';
import { AddUserComponent } from './modules/admin-userlist/add-user/add-user.component';
import { CheckoutPageComponent } from './modules/checkout/checkout-page/checkout-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ForgetPwComponent } from './modules/forget-pw/pages/forget-pw/forget-pw.component';
import { ForgetRedirComponent } from './modules/forget-pw/pages/forget-redir/forget-redir.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { PendingOrdersPageComponent } from './modules/pending-orders/pending-orders-page/pending-orders-page.component';
import { ProductsComponent } from './modules/products/products.component';
import { SignupComponent } from './modules/signup/pages/signup/signup.component';
import { TesthomeComponent } from './modules/testhome/testhome.component';
import { CartPageComponent } from './modules/products/cart-page/cart-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: "home",
    component: TesthomeComponent
  },
  {
    path: "checkout",
    component: CheckoutPageComponent,
  },
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
