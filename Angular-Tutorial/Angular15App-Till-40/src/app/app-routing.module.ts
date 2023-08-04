import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  {
    path: 'std',
    component: StudentComponent,
    children: [
      {
        path: '',
        component: StudentComponent,
      },
      {
        path: 'contactus',
        component: ContactUsComponent,
      },
    ],
  },
  {
    path: 'tcr',
    component: TeacherComponent,
  },
  {
    path: 'contactus',
    component: ContactUsComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
