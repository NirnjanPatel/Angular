import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchValue: string = '';
  onValueChange(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
  
}
