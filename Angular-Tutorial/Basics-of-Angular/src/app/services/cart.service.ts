import { Injectable } from '@angular/core';
import { Products } from '../component/products/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}
  cart: Products[] = [];

  add(product: Products) {
    this.cart.push(product);
    console.log('product-->>', product);
  }
}
