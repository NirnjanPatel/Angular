import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsyntaxComponent } from './bindingsyntax.component';

describe('BindingsyntaxComponent', () => {
  let component: BindingsyntaxComponent;
  let fixture: ComponentFixture<BindingsyntaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingsyntaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingsyntaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
