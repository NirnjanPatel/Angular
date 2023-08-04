import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unittestDemo';
  ngOnInit() {
    const arr = [1, 2, 3, 2, 3, 4, 4, 5, 0]
    const duplct = arr.filter((item, index, newarr) => {
      return newarr.indexOf(item) !== index;
    })
    console.log(duplct);
  }
}
