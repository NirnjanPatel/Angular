import {TestBed, async, fakeAsync, tick, inject} from '@angular/core/testing';
import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Router, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {Location} from '@angular/common';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`
})
class TestComponent { }

@Component({
  selector: 'home',
  template: `<h1>Home</h1>`
})
export class Home { }

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot(routes),
  ],
  declarations: [TestComponent, Home],
  bootstrap: [TestComponent],
  exports: [TestComponent] 
})
export class AppModule {}


describe('Router tests', () => {
  let router;
  //setup
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ]
    });
  });
  beforeEach(inject([Router], _router => {
    router = _router;
  }));
  
  it('default route redirects to home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(TestComponent);
    router.initialNavigation(); // triggers default
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();
    expect(location.pathname.endsWith('/home')).toBe(true);
  }));
  it('can navigate to home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(TestComponent);
    router.navigate(['/home']);
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();    
    expect(location.pathname.endsWith('/home')).toBe(true);
  }));
  it('should redirect unexisting urls to Home (fakeAsync/tick)', fakeAsync(() => {
    let fixture = TestBed.createComponent(TestComponent);
    router.navigate(['/undefined/route']);
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();     
    expect(location.pathname.endsWith('/home')).toBe(true);
  })); 
});