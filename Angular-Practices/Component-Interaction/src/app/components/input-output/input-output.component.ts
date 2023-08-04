import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss'],
})
export class InputOutputComponent {
  @Input() item = '';
  @Output() deleteRequest = new EventEmitter<string>();

  dltRequest() {
    this.deleteRequest.emit(this.item);
  }
}
