import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroJobProfileComponent } from './hero-job-profile.component';

describe('HeroJobProfileComponent', () => {
  let component: HeroJobProfileComponent;
  let fixture: ComponentFixture<HeroJobProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroJobProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroJobProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
