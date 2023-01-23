import { BookStoreService } from './../shared/book-store.service';
import { Book } from './../shared/book';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  book?: Book;

  constructor(private activatedRoute: ActivatedRoute, private bStoreService: BookStoreService) {
    // PULL / synchroner Weg
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);

    // PUSH
    this.activatedRoute.paramMap.subscribe(params => {
      const isbn = params.get('isbn') as string;
      //console.log(isbn);
      this.bStoreService.getSingleByIsbn(isbn).subscribe(book => {
        this.book = book;
      })
    });

  }
}
