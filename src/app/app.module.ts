import { RouterModule } from '@angular/router';
import { BooksModule } from './books/books.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '**', redirectTo: '/books'}]) // Wildcard-Route muss immer ganz unten stehen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
