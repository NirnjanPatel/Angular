import { Component } from '@angular/core';

@Component({
  selector: 'app-item-parent',
  templateUrl: './item-parent.component.html',
  styleUrls: ['./item-parent.component.scss'],
})
export class ItemParentComponent {
  items = ['no1', 'no2', 'no3', 'no4', 'no5', 'no6', 'no7', 'no8'];
}
