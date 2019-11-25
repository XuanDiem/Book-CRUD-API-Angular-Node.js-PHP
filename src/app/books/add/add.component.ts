import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {IBooks} from "../ibooks";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  books: IBooks[] = [];
  addFormBook = this.formBuilder.group({
    // id: ['', [Validators.required]],
    title: ['', [Validators.required]],
    author: ['', [Validators.required, Validators.minLength(2)]],
    description: ['',[ Validators.required]],
  });

  constructor(private bookService: BookService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  submit() {
    const book = this.addFormBook.value;
    this.bookService.createBooks(book).subscribe(
      result => this.router.navigate(['/books']),
      // error => console.log(error)
    )
    return 'DA THEM THANH CONG'
  }

  get title() {
    return this.addFormBook.get('title');
  }

  get author() {
    return this.addFormBook.get('author');
  }

  get description() {
    return this.addFormBook.get('description');
  }
}
