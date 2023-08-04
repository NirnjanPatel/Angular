import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoonditionalContProjComponent } from './coonditional-cont-proj.component';

describe('CoonditionalContProjComponent', () => {
  let component: CoonditionalContProjComponent;
  let fixture: ComponentFixture<CoonditionalContProjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoonditionalContProjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoonditionalContProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
