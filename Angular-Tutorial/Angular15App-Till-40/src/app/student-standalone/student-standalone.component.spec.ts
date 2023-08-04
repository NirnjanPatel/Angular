import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentStandaloneComponent } from './student-standalone.component';

describe('StudentStandaloneComponent', () => {
  let component: StudentStandaloneComponent;
  let fixture: ComponentFixture<StudentStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StudentStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
