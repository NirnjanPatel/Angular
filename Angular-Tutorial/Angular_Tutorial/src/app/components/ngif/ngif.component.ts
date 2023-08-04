import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {

  message = "I'm read only!";
  canEdit = false;

  onEditClick(){
    this.canEdit = !this.canEdit;
    if(this.canEdit){
      this.message = "You can edit!"
    }
    else{
      this.message = "I'm read only!!!!!!!"
    }
  }
}
