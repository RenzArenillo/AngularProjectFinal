import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPwComponent } from './pages/forget-pw/forget-pw.component';

const routes: Routes = [
  {
    path: 'forget-pw',
    component: ForgetPwComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPwRoutingModule { }
