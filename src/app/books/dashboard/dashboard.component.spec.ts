import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { Book } from './../shared/book';
import { BookRatingService } from './../shared/book-rating.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {

    const ratingMock: BookRatingService = {
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b
    };

    // Ausblick: Ersatz für BookStoreService
    const storeMock = {
      getAll: () => of([])
    }

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      schemas: [NO_ERRORS_SCHEMA], //shallow component test
      providers: [
        //BRS ersetzen: Immer wenn jemand den Service anfordert
        //wird stattdessen der RatingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp on doRateUp', () => {
    const book = { isbn: '123' } as Book;// Type assertion

    //wir injecten den Service und setzen einen Spy darauf an
    const service = TestBed.inject(BookRatingService);
    spyOn(service, 'rateUp').and.callThrough();

    component.doRateUp(book);
    expect(service.rateUp).toHaveBeenCalledOnceWith(book);
  });

});
