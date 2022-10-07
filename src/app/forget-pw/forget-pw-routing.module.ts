import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPwComponent } from './pages/forget-pw/forget-pw.component';
import { ForgetRedirComponent } from './pages/forget-redir/forget-redir.component';

const routes: Routes = [
  {
    path: 'forget-pw',
    component: ForgetPwComponent
  },
  {
    path: 'forget-pw/redirect',
    component: ForgetRedirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPwRoutingModule { }
