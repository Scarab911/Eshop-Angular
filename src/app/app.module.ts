import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { HeaderComponent } from './Components/header/header.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { ProductsListComponent } from "./Components/products/products-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    DiscountPipe,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
