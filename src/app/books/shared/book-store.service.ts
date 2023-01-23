import { Book } from './book';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  readonly api = 'https://api.angular.schule'

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api + '/books');
  }

  getSingleByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(this.api + '/books/' + isbn);
  }

  searchBook(term: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.api + '/books/search/' + term);
  }

  createBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.api + '/books', book);
  }

  deleteBook(isbn: string): Observable<Book[]> {
    //copied from getSingleByIsbn
    return this.httpClient.delete<Book[]>(this.api + '/books/' + isbn);
  }

}
