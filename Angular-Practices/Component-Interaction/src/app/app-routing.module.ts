import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';
import { CountdownParent1Component } from './components/countdown-parent1/countdown-parent1.component';
import { MissionControlComponent } from './components/missioncontrol/missioncontrol.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StylesComponent } from './components/styles/styles.component';
import { HostSelectorExampleComponent } from './components/host-selector-example/host-selector-example.component';
import { ItemParentComponent } from './components/item-parent/item-parent.component';
import { ItemOutputParentComponent } from './components/item-output-parent/item-output-parent.component';
import { MultiSlotComponent } from './components/multi-slot/multi-slot.component';
import { CondContProjParentComponent } from './components/cond-cont-proj-parent/cond-cont-proj-parent.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: 'version-parent', component: VersionParentComponent },
  { path: 'home', component: HomeComponent },
  { path: 'voter-taker', component: VotetakerComponent },
  { path: 'app-countdown-parent', component: CountdownParentComponent },
  { path: 'app-countdown-parent1', component: CountdownParent1Component },
  { path: 'app-mission-control', component: MissionControlComponent },
  { path: 'app-styles', component: StylesComponent },
  {
    path: 'app-host-selector-example',
    component: HostSelectorExampleComponent,
  },
  { path: 'item-parent', component: ItemParentComponent },
  { path: 'app-item-output-parent', component: ItemOutputParentComponent },
  { path: 'multi-slot', component: MultiSlotComponent },
  { path: 'cont-proj-parent', component: CondContProjParentComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
