import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownParentComponent } from './countdown-parent.component';

describe('CountdownParentComponent', () => {
  let component: CountdownParentComponent;
  let fixture: ComponentFixture<CountdownParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountdownParentComponent]
    });
    fixture = TestBed.createComponent(CountdownParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
