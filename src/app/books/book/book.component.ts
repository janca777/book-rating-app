
import { Book } from '../shared/book';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book?: Book;
  @Input() MIN = 1;
  @Input() MAX = 5;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();
  @Output() deleteBook = new EventEmitter<Book>();
  @Output() showTitle = new EventEmitter<Book>();

  doRateDown() {
    this.rateDown.emit(this.book);
  }

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doDeleteBook() {
    this.deleteBook.emit(this.book);
  }

  doShowTitle() {
    this.showTitle.emit(this.book);
  }

}
