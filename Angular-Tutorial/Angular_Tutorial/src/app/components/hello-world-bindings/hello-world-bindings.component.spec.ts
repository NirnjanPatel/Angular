import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldBindingsComponent } from './hello-world-bindings.component';

describe('HelloWorldBindingsComponent', () => {
  let component: HelloWorldBindingsComponent;
  let fixture: ComponentFixture<HelloWorldBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldBindingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloWorldBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
