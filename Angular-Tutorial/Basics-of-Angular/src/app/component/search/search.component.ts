import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public searchValue : string = '';


  
  // onValueChange(eventData: any) {
  //   this.searchValue = eventData.target.value;
  //   console.log(this.searchValue);
  // }
  
}
