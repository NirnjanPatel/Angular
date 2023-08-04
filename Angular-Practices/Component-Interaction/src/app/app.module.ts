import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './components/hero-child/hero-child.component';
import { HeroParentComponent } from './components/hero-parent/hero-parent.component';
import { VersionChildComponent } from './components/version-child/version-child.component';
import { VersionParentComponent } from './components/version-parent/version-parent.component';
import { VoterComponent } from './components/voter/voter.component';
import { VotetakerComponent } from './components/votetaker/votetaker.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './components/countdown-parent/countdown-parent.component';
import { CountdownParent1Component } from './components/countdown-parent1/countdown-parent1.component';
import { CountdownTimer1Component } from './components/countdown-timer1/countdown-timer1.component';
import { MissionControlComponent } from './components/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './components/astronaut/astronaut.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StylesComponent } from './components/styles/styles.component';
import { HostSelectorExampleComponent } from './components/host-selector-example/host-selector-example.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ItemParentComponent } from './components/item-parent/item-parent.component';
import { ItemOutputComponent } from './components/item-output/item-output.component';
import { ItemOutputParentComponent } from './components/item-output-parent/item-output-parent.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { SingleSlotComponent } from './components/single-slot/single-slot.component';
import { MultiSlotComponent } from './components/multi-slot/multi-slot.component';
import { CoonditionalContProjComponent } from './components/coonditional-cont-proj/coonditional-cont-proj.component';
import { CondContProjParentComponent } from './components/cond-cont-proj-parent/cond-cont-proj-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    HeroParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownParent1Component,
    CountdownTimer1Component,
    MissionControlComponent,
    AstronautComponent,
    HomeComponent,
    PageNotFoundComponent,
    StylesComponent,
    HostSelectorExampleComponent,
    ItemDetailComponent,
    ItemParentComponent,
    ItemOutputComponent,
    ItemOutputParentComponent,
    InputOutputComponent,
    SingleSlotComponent,
    MultiSlotComponent,
    CoonditionalContProjComponent,
    CondContProjParentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
