// The *ngIf directive is most commonly used to conditionally show an inline template

import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css'],
})
export class NgifComponent {
  message = "I'm read only!";
  canEdit = false;
  condition = true;
  condition1 = false;
  condition2 = 'this is value!';
  show = true;

  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
