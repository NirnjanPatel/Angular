import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './concepts1/binding/binding.component';
import { NgforComponent } from './concepts1/ngfor/ngfor.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { CardComponent } from './home/card/card.component';
import { NgifComponent } from './concepts1/ngif/ngif.component';
import { InterpolationComponent } from './concepts2/interpolation/interpolation.component';
import { TemplatestatementsComponent } from './concepts2/templatestatements/templatestatements.component';
import { BindingsyntaxComponent } from './concepts2/bindingsyntax/bindingsyntax.component';
import { PropertybindingComponent } from './concepts2/propertybinding/propertybinding.component';
import { AttributeComponent } from './concepts2/attribute/attribute.component';
import { EventbindingComponent } from './concepts2/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './concepts2/twowaybinding/twowaybinding.component';
import { BuiltindirectivesComponent } from './concepts2/builtindirectives/builtindirectives.component';
import { TrvariablesComponent } from './concepts2/trvariables/trvariables.component';

@NgModule({
  declarations: [
    NgifComponent,
    BindingComponent,
    NgforComponent,
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    InterpolationComponent,
    TemplatestatementsComponent,
    BindingsyntaxComponent,
    PropertybindingComponent,
    AttributeComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    BuiltindirectivesComponent,
    TrvariablesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
