import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should counter variable should be 0', () => {
    expect(component.counter).toBe(0);
  });

  it('should call Increment function on click ', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'increment'); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('#increment'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.increment).toHaveBeenCalled();
  }));

  it('should call decrement function on click ', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'decrement'); //method attached to the click.
    let btn = fixture.debugElement.query(By.css('#decrement'));
    btn.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.decrement).toHaveBeenCalled();
  }));

  it('should counter value check after increment function call', () => {
    component.increment();
    fixture.detectChanges();
    expect(component.counter).toBe(1);
  });

  it('should counter value check after decrement function call', () => {
    component.decrement();
    fixture.detectChanges();
    expect(component.counter).toBe(-1);
  });

});
