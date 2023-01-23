import { BooksModule } from './books/books.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // 'full' ist notwendig bei Weiterleitung von leerem Pfad
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
  loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
