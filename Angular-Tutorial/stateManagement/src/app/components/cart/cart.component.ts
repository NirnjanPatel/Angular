import { Component } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  constructor(private bookService: BooksService) {}

  public books: any[] = [];
  getCart() {
    this.books = this.bookService.get();
    return this.bookService.get();
  }
}
