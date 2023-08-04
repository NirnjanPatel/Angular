import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  // @Input() public all: number = 0;
  @Input('total') public all: number = 0; // using elias instead
  @Input() public free: number = 0;
  @Input() public premium: number = 0;

  public selectedRadiobuttonValue: string = 'All';
  @Output()
  public onRadiobuttonSelectionChange: EventEmitter<string> =
    new EventEmitter<string>();

  public handleRadiobuttonSelectionChange() {
    this.onRadiobuttonSelectionChange.emit(this.selectedRadiobuttonValue);
    // console.log(this.selectedRadiobuttonValue);
  }
  
}
