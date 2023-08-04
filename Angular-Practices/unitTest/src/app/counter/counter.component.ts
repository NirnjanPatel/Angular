import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  public counter: any = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    this.counter = this.counter + 1;
  }

  decrement() {
    this.counter = this.counter - 1;
  }

}
