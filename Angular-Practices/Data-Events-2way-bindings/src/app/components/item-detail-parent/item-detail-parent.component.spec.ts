import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailParentComponent } from './item-detail-parent.component';

describe('ItemDetailParentComponent', () => {
  let component: ItemDetailParentComponent;
  let fixture: ComponentFixture<ItemDetailParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetailParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetailParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
