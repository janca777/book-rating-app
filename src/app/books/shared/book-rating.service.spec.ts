import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  book = {
    isbn: '',
    title: '',
    rating: 3,
    //authors: string[],
    price: 32.9,
    description: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should rate up a book by one', () => {
    //Arrange
    book.rating = 3

    //ACT
    const ratedBook = service.rateUp(book);

    //Assert
    expect(ratedBook.rating).toBe(4);// konkrete Werte sind hier wichtig
  })

  it('should rate down a book by one', () => {
        book.rating = 3;
        const ratedBook = service.rateDown(book);
        expect(ratedBook.rating).toBe(2);
  })

  it('should not rate higher than five', () => {
        book.rating = 5;
        const ratedBook = service.rateUp(book);
        expect(ratedBook.rating).toBe(5);
  })

  it('should not rate lower than one', () => {
        book.rating = 1;
        const ratedBook = service.rateDown(book);
        expect(ratedBook.rating).toBe(1);
  })

});
