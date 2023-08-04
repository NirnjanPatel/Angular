import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimer1Component } from '../countdown-timer1/countdown-timer1.component';

@Component({
  selector: 'app-countdown-parent1',
  templateUrl: './countdown-parent1.component.html',
  styleUrls: ['./countdown-parent1.component.scss'],
})
export class CountdownParent1Component implements AfterViewInit {
  @ViewChild(CountdownTimer1Component)
  private timerComponent!: CountdownTimer1Component;

  seconds() {
    return 0;
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.seconds = () => this.timerComponent.seconds;
    }, 0);
  }
}
