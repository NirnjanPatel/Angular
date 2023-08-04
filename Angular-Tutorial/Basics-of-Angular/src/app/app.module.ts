import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './component/search/search.component';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './component/notification/notification.component';
import { ProductsModule } from './component/products/products.module';
import { ProductsComponent } from './component/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NotificationComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
