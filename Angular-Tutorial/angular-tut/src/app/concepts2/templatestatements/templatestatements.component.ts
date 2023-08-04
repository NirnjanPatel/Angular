// Template statements are methods or properties that you can use in your HTML to respond to user events. With template statements, your application can engage users through actions such as displaying dynamic content or submitting forms.

import { Component } from '@angular/core';

@Component({
  selector: 'app-templatestatements',
  templateUrl: './templatestatements.component.html',
  styleUrls: ['./templatestatements.component.css'],
})
export class TemplatestatementsComponent {
  deleteHero() {}
  onSave() {}
  onSubmit() {}
  // Use template statements with elements, components, or directives in response to events.
}
