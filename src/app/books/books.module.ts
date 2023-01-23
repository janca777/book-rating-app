import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';

import { BookDetailsComponent } from './book-details/book-details.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookDetailsComponent,
    CreateComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
