import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownTimer1Component } from './countdown-timer1.component';

describe('CountdownTimer1Component', () => {
  let component: CountdownTimer1Component;
  let fixture: ComponentFixture<CountdownTimer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownTimer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownTimer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
