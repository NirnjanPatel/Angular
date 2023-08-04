import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})

// OnInit - INTERFACE
// A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. Define an ngOnInit() method to handle any additional initialization tasks.

// interface OnInit {
//   ngOnInit(): void
// }

export class ShippingComponent implements OnInit {
  constructor(private cartService: CartService) { }

  shippingCosts!: Observable<{ type: string, price: number }[]>;

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  // The async pipe returns the latest value from a stream of data and continues to do so for the life of a given component
}
