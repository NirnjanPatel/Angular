import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
// export class ChildComponent implements OnInit, OnDestroy {
export class ChildComponent implements OnInit, OnChanges {
  public counter: number = 0;
  public interval: any;
  @Input() channelName = '';

  constructor() {
    console.log('Child constructor is called!');
  }

  ngOnInit(): void {
    console.log('Child ngOnInit is called!');
    // this.interval = setInterval(() => {
    //   this.counter += 1;
    //   console.log(this.counter);
    // }, 1000);
  }
  ngOnDestroy() {
    // clearInterval(this.interval);
    console.log('Interval destroyed!!,and Child ngOnDestroy is called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Child ngOnChanges is called!');
    console.log('changes -> ', changes['channelName']);
  }
}
