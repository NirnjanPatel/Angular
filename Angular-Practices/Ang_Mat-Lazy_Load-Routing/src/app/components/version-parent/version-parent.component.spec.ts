import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionParentComponent } from './version-parent.component';

describe('VersionParentComponent', () => {
  let component: VersionParentComponent;
  let fixture: ComponentFixture<VersionParentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersionParentComponent]
    });
    fixture = TestBed.createComponent(VersionParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
