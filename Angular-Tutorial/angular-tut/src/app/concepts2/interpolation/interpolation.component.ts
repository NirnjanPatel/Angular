import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css'],
})
export class InterpolationComponent {
  currentCustomer = 'Maria';
  title = 'this is title';
  itemImageUrl =
    'https://images.pexels.com/photos/12850802/pexels-photo-12850802.jpeg?auto=compress&cs=tinysrgb&w=150&lazy=load';
}
