import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { ForgotPasswordComponent } from '../../components/forgot-password/forgot-password.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HeroChildComponent } from 'src/app/components/hero-child/hero-child.component';
import { VersionChildComponent } from 'src/app/components/version-child/version-child.component';
import { VersionParentComponent } from 'src/app/components/version-parent/version-parent.component';
import { VoterComponent } from 'src/app/components/voter/voter.component';
import { VotetakerComponent } from 'src/app/components/votetaker/votetaker.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'hero-child', component: HeroChildComponent },
  { path: 'version-parent', component: VersionParentComponent },
  { path: 'app-votetaker', component: VotetakerComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/admin.module').then((m) => {
        return m.AdminModule;
      }),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
