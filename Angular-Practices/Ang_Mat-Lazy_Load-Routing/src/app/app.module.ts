import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './modules/admin/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoterComponent } from './components/voter/voter.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    HeroChildComponent,
    HeroParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    ItemOutputComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
