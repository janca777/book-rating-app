import { NgModule, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes, TitleStrategy, RouterStateSnapshot } from '@angular/router';


const routes: Routes = [
  // 'full' ist notwendig bei Weiterleitung von leerem Pfad
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  {
    path: 'books',
    loadChildren: () => import('./books/books.module').then(m => m.BooksModule)
  }
];

@Injectable()
export class CustomTitleStrategy extends TitleStrategy {
  constructor(private title: Title) {
     super();
     }

  updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState) ?? 'Book Rating!';
    this.title.setTitle(title);
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: TitleStrategy, useClass: CustomTitleStrategy }]
})
export class AppRoutingModule { }
