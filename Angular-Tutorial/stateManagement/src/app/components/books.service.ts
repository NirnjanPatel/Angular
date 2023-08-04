import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}

  public books: any[] = [];

  add(book: any): void {
    this.books.push(book);
  }

  get() {
    return this.books;
  }

  removeItem(book: any) {
    this.books = this.books.filter((book) => book !== book);
  }
}
