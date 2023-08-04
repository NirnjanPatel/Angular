import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { StudentStandaloneComponent } from './app/student-standalone/student-standalone.component';
import { AppComponent } from './app/app.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// bootstrapApplication(AppComponent);
