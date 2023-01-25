import { BookDetailsComponent } from './book-details/book-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '' , component: DashboardComponent},
  { path: 'create' , component: CreateComponent, title: 'Create Book'},
  { path: 'search' , component: SearchComponent},
  { path: ':isbn' , component: BookDetailsComponent, title: 'Book Details'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
