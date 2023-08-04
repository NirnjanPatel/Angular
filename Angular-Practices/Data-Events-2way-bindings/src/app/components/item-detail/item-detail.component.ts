import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {

  @Input() item!: Item;
  itemImageUrl = 'https://fireship.io/lessons/sharing-data-between-angular-components-four-methods/img/parent-child-sibling-angular-components.png';
  lineThrough = '';
  displayNone = '';
  @Input() prefix = '';

    // This component makes a request but it can't actually delete a hero.
    @Output() deleteRequest = new EventEmitter<Item>();

    delete(){
      this.deleteRequest.emit(this.item);
      this.displayNone = this.displayNone ? '' : 'none' ;
      this.lineThrough = this.lineThrough ? '' : 'lineThrough';
    }
}
