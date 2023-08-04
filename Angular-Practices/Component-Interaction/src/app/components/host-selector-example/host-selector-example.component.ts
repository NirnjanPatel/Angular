import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-host-selector-example',
  // templateUrl: './host-selector-example.component.html',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button type="button" (click)="activate()">Activate</button>
    <br />
    <p>Template link tags</p>
  `,

  // styleUrls: ['./host-selector-example.component.scss']
  styles: ['h1{font-size:30px; color:red}', 'h4{font-size:40px; color:red}'],
})
export class HostSelectorExampleComponent {
  activate() {
    console.log('activate');
  }
}
