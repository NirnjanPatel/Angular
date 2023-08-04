import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizerParentComponent } from './components/sizer-parent/sizer-parent.component';
import { AttributeBindingComponent } from './components/attribute-binding/attribute-binding.component';
import { AdBannerComponent } from './components/ad-banner/ad-banner.component';
import { HeroJobProfileComponent } from './components/hero-job-profile/hero-job-profile.component';
import { ItemDetailParentComponent } from './components/item-detail-parent/item-detail-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SizerParentComponent },
  { path: 'sizer-parent', component: SizerParentComponent },
  { path: 'attribute-binding', component: AttributeBindingComponent },
  { path: 'ad-banner', component: AdBannerComponent },
  { path: 'hero-job-profile', component: HeroJobProfileComponent },
  { path: 'item-detail-parent', component: ItemDetailParentComponent },
  // { path: 'sizer-parent', component: SizerParentComponent },
  // { path: '**', component :  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
