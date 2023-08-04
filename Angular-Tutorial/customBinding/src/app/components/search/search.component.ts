import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public enteredSearchValue: string = '';
  @Output()
  public searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  public onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}
