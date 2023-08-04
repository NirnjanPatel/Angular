import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './concepts1/ngif/ngif.component';
import { NgforComponent } from './concepts1/ngfor/ngfor.component';
import { BindingComponent } from './concepts1/binding/binding.component';
import { HomeComponent } from './home/home.component';
import { InterpolationComponent } from './concepts2/interpolation/interpolation.component';
import { TemplatestatementsComponent } from './concepts2/templatestatements/templatestatements.component';
import { BindingsyntaxComponent } from './concepts2/bindingsyntax/bindingsyntax.component';
import { PropertybindingComponent } from './concepts2/propertybinding/propertybinding.component';
import { AttributeComponent } from './concepts2/attribute/attribute.component';
import { EventbindingComponent } from './concepts2/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './concepts2/twowaybinding/twowaybinding.component';
import { BuiltindirectivesComponent } from './concepts2/builtindirectives/builtindirectives.component';
import { TrvariablesComponent } from './concepts2/trvariables/trvariables.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'ngif',
    component: NgifComponent,
  },
  {
    path: 'ngfor',
    component: NgforComponent,
  },
  {
    path: 'binding',
    component: BindingComponent,
  },
  {
    path: 'interpolation',
    component: InterpolationComponent,
  },
  {
    path: 'templatestatements',
    component: TemplatestatementsComponent,
  },
  {
    path: 'bindingsyntax',
    component: BindingsyntaxComponent,
  },
  {
    path: 'propertybinding',
    component: PropertybindingComponent,
  },
  {
    path: 'attribute',
    component: AttributeComponent,
  },
  {
    path: 'eventbinding',
    component: EventbindingComponent,
  },
  {
    path: 'twowaybinding',
    component: TwowaybindingComponent,
  },
  {
    path: 'builtindirectives',
    component: BuiltindirectivesComponent,
  },
  {
    path: 'trvariables',
    component: TrvariablesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
