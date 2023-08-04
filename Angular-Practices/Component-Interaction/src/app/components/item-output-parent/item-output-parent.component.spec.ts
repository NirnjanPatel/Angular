import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOutputParentComponent } from './item-output-parent.component';

describe('ItemOutputParentComponent', () => {
  let component: ItemOutputParentComponent;
  let fixture: ComponentFixture<ItemOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOutputParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
