import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondContProjParentComponent } from './cond-cont-proj-parent.component';

describe('CondContProjParentComponent', () => {
  let component: CondContProjParentComponent;
  let fixture: ComponentFixture<CondContProjParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondContProjParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondContProjParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
