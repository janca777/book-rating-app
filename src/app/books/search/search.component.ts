import { distinctUntilChanged, switchMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Component, inject } from '@angular/core';
import { BookStoreService } from '../shared/book-store.service';
import { debounceTime, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Book } from '../shared/book';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchControl = new FormControl('', {nonNullable: true});

  private bStoreService = inject(BookStoreService)
  books$: Observable<Book[]> = this.searchControl.valueChanges.pipe(
    filter(term => term.length >= 3),
    debounceTime(500),
    distinctUntilChanged(),
    switchMap(term => this.bStoreService.searchBook(term))
  );


}
