import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  books: Book[] = [];

  constructor(private bStoreService: BookStoreService, private router: Router) { }

  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13),
        Validators.pattern(/^[0-9]*$/)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(80)
      ]
    }),
    description: new FormControl('', { nonNullable: true }),
    rating: new FormControl(1, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1), //muss noch injected werden
        Validators.max(5)
      ]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(0)
      ]
    }),
  })

  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) {
      return false;
    }
    return control.touched && control.invalid;
  }

  hasError(controlName: string, errorCode: string): boolean {
    const control = this.bookForm.get(controlName);
    if (!control) {
      return false;
    }
    return control.hasError(errorCode) && control.touched;
  }

  submitForm() {
    const newBook: Book = this.bookForm.getRawValue();

    this.bStoreService.createBook(newBook).subscribe(receivedBook => {
      this.router.navigate(['/books', receivedBook.isbn]);

    });

  }
}
