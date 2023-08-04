import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextSummaryPipe } from './pipe/text-summary-pipe/text-summary.pipe';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TextSummaryPipe,
    LoginComponent,
    HelloWorldComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
