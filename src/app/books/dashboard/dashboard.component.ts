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

  constructor(private rs: BookRatingService, private bs: BookStoreService) {

    this.bs.getAll().subscribe(books => {
      this.books = books;
    });

    // this.books = [
    //   {
    //     isbn: '123',
    //     title: 'Angular',
    //     description: 'Das große Praxisbuch',
    //     rating: 5,
    //     price: 42.9
    //   },
    //   {
    //     isbn: '456',
    //     title: 'Vue.js',
    //     description: 'Das grüne Framework',
    //     rating: 3,
    //     price: 36.9
    //   }
    // ];
  }

  doRateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  doRateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  doDeleteBook(book: Book) {
    if (!confirm(`Möchten Sie das Buch "${book.title}" unwiderruflich löschen?`)) {
      return;
    }


    this.bs.deleteBook(book.isbn).subscribe(() => {
      this.bs.getAll().subscribe(books => this.books = books);
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
