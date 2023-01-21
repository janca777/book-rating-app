import { Book } from './book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  rateUp(book: Book): Book {
    return {
      ...book,
      rating: Math.min(book.rating + 1, 5)
    };
  }

  rateDown(book: Book): Book {
    return {
      ...book,
      rating: Math.max(book.rating - 1, 1)
    };
  }

}
