import { BookStoreService } from './../shared/book-store.service';
import { BookRatingService } from './../shared/book-rating.service';
import { Book } from '../shared/book';
import { Component } from '@angular/core';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];

  constructor(private bRatingService: BookRatingService, private bStoreService: BookStoreService) {
    this.bStoreService.getAll().subscribe(books => {
      this.books = books;
    });
  }

  doRateUp(book: Book) {
    const ratedBook = this.bRatingService.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.bRatingService.rateDown(book);
    this.updateList(ratedBook);
  }

  confirmDeleteBook(book: Book) {
    if (confirm(`Das Buch "${book.title}" jetzt löschen?`)) {
      this.doDeleteBook(book)
    }
  }

  doDeleteBook(book: Book) {
    this.bStoreService.deleteBook(book).subscribe(books => {
      this.books = books;
    });
  }

  private updateList(ratedBook: Book) {
    // const index = findIndex(isbn);
    // this.books[index] = ratedBook;

    //.map() erzeugt KEINE Mutation
    this.books = this.books.map(b => {
      if (b.isbn === ratedBook.isbn) {
        return ratedBook;
      }
      return b;
    });
  }

}
