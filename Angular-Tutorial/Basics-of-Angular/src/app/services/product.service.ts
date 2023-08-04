import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  public products =  [
    {
      id: 1,
      name: 'Minimalists Analog Watch',
      price: '109',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/1.jpg',
    },
    {
      id: 2,
      name: 'Hisense Ultra HD Smart TV',
      price: '3339',
      color: 'Black',
      available: 'Available',
      image: '/assets/products/2.jpg',
    },
    {
      id: 3,
      name: 'APPLE iPhone 12',
      price: '1855',
      color: 'Black',
      available: 'Not Available',
      image: '/assets/products/3.jpg',
    },
    {
      id: 4,
      name: 'LG Fully Automatic washing Machine',
      price: '1765',
      color: 'white',
      available: 'Available',
      image: '/assets/products/4.jpg',
    },
    {
      id: 5,
      name: 'LG Refrigerator with Door Cooling',
      price: '2815',
      color: 'white',
      available: 'Not Available',
      image: '/assets/products/5.jpg',
    },
    {
      id: 6,
      name: 'DELL Inspiron One 27 Ryzen 7',
      price: '2145',
      color: 'white',
      available: 'Available',
      image: '/assets/products/6.jpg',
    },
  ];
}
