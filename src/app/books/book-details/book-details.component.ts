import { BookStoreService } from './../shared/book-store.service';
import { Book } from './../shared/book';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  book$: Observable<Book>;

  constructor(private activatedRoute: ActivatedRoute, private bStoreService: BookStoreService) {
    // PULL / synchroner Weg
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    // console.log(isbn);


    this.book$  = this.activatedRoute.paramMap.pipe(
    //jede isbn wird umgewandel tin ein Buch, und damit haben wir einen Datenstrom von Büchern
    map(params => params.get('isbn') as string),
    switchMap(isbn => this.bStoreService.getSingleByIsbn(isbn)) //hiermit wird die Race-Condition vermieden
    )

    // PUSH
    // this.activatedRoute.paramMap.subscribe(params => {
    //   const isbn = params.get('isbn') as string;
    //   this.bStoreService.getSingleByIsbn(isbn).subscribe(book => {
    //     this.book = book;
    //   })
    // });

  }
}
