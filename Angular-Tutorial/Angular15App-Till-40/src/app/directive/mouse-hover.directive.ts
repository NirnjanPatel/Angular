import { Directive } from '@angular/core';
import { FontColorDirective } from './font-color.directive';
import { ItalicsFontDirective } from './italics-font.directive';

@Directive({
  selector: '[appMouseHover]',
  standalone: true,
  hostDirectives: [
    {
      directive: ItalicsFontDirective,
      outputs: ['hover'],
    },
    {
      directive: FontColorDirective,
      inputs: ['color:changeColor'],
    },
  ],
})
export class MouseHoverDirective {
  constructor() {}
}
