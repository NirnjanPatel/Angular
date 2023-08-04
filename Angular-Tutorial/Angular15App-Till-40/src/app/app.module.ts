import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontColorDirective } from './directive/font-color.directive';
import { StudentStandaloneComponent } from './student-standalone/student-standalone.component';
import { ItalicsFontDirective } from './directive/italics-font.directive';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MultiplicationPipe } from './multiplication.pipe';
import { RouterLinkWithHref } from '@angular/router';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Angular15Service } from './angular15.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    MultiplicationPipe,
    TeacherComponent,
    HomeComponent,
    ErrorPageComponent,
    ContactUsComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontColorDirective,
    StudentStandaloneComponent,
    ItalicsFontDirective,
    CommonModule,
    MatSelectModule,
    FormsModule,
    RouterLinkWithHref,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [Angular15Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
