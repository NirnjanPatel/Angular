import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit, OnChanges {
  // public isChild: boolean = false;
  public isChild = true;
  public channelName = '';
  constructor() {
    console.log('Parent constructor is called!');
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit is called!');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges is called!');
  }
}
