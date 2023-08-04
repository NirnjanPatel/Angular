import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookssComponent } from './bookss.component';

describe('BookssComponent', () => {
  let component: BookssComponent;
  let fixture: ComponentFixture<BookssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
