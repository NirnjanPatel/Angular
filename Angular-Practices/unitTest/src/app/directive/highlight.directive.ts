import {Directive} from '@angular/core';

@Directive({
  selector: '[highlight]',
  host: {
    'style': 'background-color: yellow;'
  }
})
export class Highlight { }