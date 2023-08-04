import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrvariablesComponent } from './trvariables.component';

describe('TrvariablesComponent', () => {
  let component: TrvariablesComponent;
  let fixture: ComponentFixture<TrvariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrvariablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrvariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
