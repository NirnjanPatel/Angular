import { Component } from '@angular/core';

@Component({
  selector: 'app-item-output-parent',
  templateUrl: './item-output-parent.component.html',
  styleUrls: ['./item-output-parent.component.scss'],
})
export class ItemOutputParentComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  currentItem = 'Television';

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  crossOffItem(value: string) {
    console.log('crossOffItem', value);
  }
}

// Using @Input() and @Output() together
