import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SizerParentComponent } from './components/sizer-parent/sizer-parent.component';
import { SizerComponent } from './components/sizer-child/sizer-child.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { CompWithHostBindingComponent } from './components/attribute-binding/comp-with-host-binding';
import { MyInputWithAttributeDecoratorComponent } from './components/attribute-binding/my-input-with-attribute-decorator.component';
import { NavBarComponent } from './components/attribute-binding/single-and-multiple-style-binding.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroProfileComponent } from './components/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './components/hero-job-ad/hero-job-ad.component';
import { AdDirective } from './directives/ad.directive';
import { HeroJobProfileComponent } from './components/hero-job-profile/hero-job-profile.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { ClickDirective } from './directives/click.directive';
import { ItemDetailParentComponent } from './components/item-detail-parent/item-detail-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    SizerParentComponent,
    SizerComponent,
    AttributeBindingComponent,
    CompWithHostBindingComponent,
    MyInputWithAttributeDecoratorComponent,
    NavBarComponent,
    AdBannerComponent,
    HeroProfileComponent,
    HeroJobAdComponent,
    AdDirective,
    HeroJobProfileComponent,
    ItemDetailComponent,
    ClickDirective,
    ItemDetailParentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
