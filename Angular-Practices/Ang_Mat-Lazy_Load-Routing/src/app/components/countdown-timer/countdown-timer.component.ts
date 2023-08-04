import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
})
export class CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;
  
  ngOnDestroy() {
    this.clearTimer?.();
  }

  start() {
    this.countDown();
  }

  stop() {
    this.clearTimer?.();
    this.message = `Holding at T - ${this.seconds} seconds`;
  }

  private countTimer = VoidFunction | undefined;

  private countDown() {}
}
