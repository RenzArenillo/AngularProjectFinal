import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { CategoryComponent } from './dashboard/components/category/category.component';
import { ProductComponent } from './dashboard/components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { ProductModalComponent } from './shared/modals/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    CategoryComponent,
    ProductComponent,
    FooterComponent,
    ProductModalComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
