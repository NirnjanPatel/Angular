import {Component, Input} from '@angular/core';

@Component({
  selector: 'greeter',
  template: `<div highlight><h1>Hello {{name}}!</h1></div>`,
  styles: [`:host { color:blue; } .info { color: black; }`],
  host: {
    'style': 'color: pink;',
    'class': 'info'
  }
})
export class Greeter { 
  @Input() name;
}