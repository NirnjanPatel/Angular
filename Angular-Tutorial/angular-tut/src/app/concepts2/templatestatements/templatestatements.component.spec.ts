import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatestatementsComponent } from './templatestatements.component';

describe('TemplatestatementsComponent', () => {
  let component: TemplatestatementsComponent;
  let fixture: ComponentFixture<TemplatestatementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatestatementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatestatementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
