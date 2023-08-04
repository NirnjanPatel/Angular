import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerChildComponent } from './sizer-child.component';

describe('SizerChildComponent', () => {
  let component: SizerChildComponent;
  let fixture: ComponentFixture<SizerChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SizerChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SizerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
