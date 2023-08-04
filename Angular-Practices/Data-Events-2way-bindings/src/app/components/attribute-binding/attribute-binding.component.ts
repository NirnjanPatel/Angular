import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-binding',
  templateUrl: './attribute-binding.component.html',
  styleUrls: ['./attribute-binding.component.scss'],
})
export class AttributeBindingComponent {
  actionName = 'Create and set an attribute';
  isSpecial = true;
  canSave = true;
  classExpression = 'special clearance';
  styleExpression = 'border: solid red 3px';
  color = 'blue';
  border = '.5rem dashed black';
}
