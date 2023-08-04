import { Component } from '@angular/core';

@Component({
  selector: 'app-item-detail-parent',
  templateUrl: './item-detail-parent.component.html',
  styleUrls: ['./item-detail-parent.component.scss'],
})
export class ItemDetailParentComponent {
  public clickMessage = '';
  public currentItem = { name: 'teapot' };

  onSave(event?: MouseEvent) {
    const eventMessage = event
      ? 'Event target is ' + (event.target as HTMLElement).textContent
      : '';

    alert('Saved. ' + eventMessage);
    if (event) {
      event.stopPropagation();
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
