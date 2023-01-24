import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchControl = new FormControl('', {nonNullable: true});

  constructor() {
    this.searchControl.valueChanges.subscribe(e => console.log(e));
  }

}
