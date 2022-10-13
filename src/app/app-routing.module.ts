import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddUserComponent } from './modules/admin-userlist/add-user/add-user.component';
import { AdminUserlistComponent } from './modules/admin-userlist/admin-userlist.component';
import { CheckoutPageComponent } from './modules/checkout/checkout-page/checkout-page.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ForgetPwComponent } from './modules/forget-pw/pages/forget-pw/forget-pw.component';
import { ForgetRedirComponent } from './modules/forget-pw/pages/forget-redir/forget-redir.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { PendingOrdersPageComponent } from './modules/pending-orders/pending-orders-page/pending-orders-page.component';
import { CartPageComponent } from './modules/products/cart-page/cart-page.component';
import { FormComponent } from './modules/products/components/form/form.component';
import { ProductsComponent } from './modules/products/products.component';
import { ProfileItemComponent } from './modules/profile/components/profile-item/profile-item.component';
import { SignupComponent } from './modules/signup/pages/signup/signup.component';
import { TesthomeComponent } from './modules/testhome/testhome.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
  },
  {
    path: 'orders',
    component: PendingOrdersPageComponent,
  },
  {
    path: 'userlist',
    component: AdminUserlistComponent, // for admin
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'admin',
    component: ProductsComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
    //canActivate: [AdminGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'forget-pw',
    component: ForgetPwComponent,
  },
  {
    path: 'sign-up',
    component: SignupComponent,
  },
  {
    path: 'forget-pw/redirect',
    component: ForgetRedirComponent,
  },
  {
    path: 'profile',
    component: ProfileItemComponent,
    // loadChildren: () => import('./modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'cart',
    component: CartPageComponent,
  },

  // {
  //   path: 'product',
  //   component: ProductPageComponent
  // }
  {
    path: 'productsform',
    component: FormComponent
  },
  {
    path: 'productsform/:id',
    component: FormComponent
  },
  {
    path: 'checkout/:id',
    component: CheckoutPageComponent,
  },
  
  {
    path: "adduser",
    component: AddUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

