import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSelectorExampleComponent } from './host-selector-example.component';

describe('HostSelectorExampleComponent', () => {
  let component: HostSelectorExampleComponent;
  let fixture: ComponentFixture<HostSelectorExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostSelectorExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostSelectorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
