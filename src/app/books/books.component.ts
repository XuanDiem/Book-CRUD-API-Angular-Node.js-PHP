import {Component, OnInit} from '@angular/core';
import {BookService} from "../services/book.service";
import {Router} from "@angular/router";
import {IBooks} from "./ibooks";
import {Observable} from "rxjs";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: IBooks[] = [];
  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.getAll().subscribe(data => {
      this.books = data;
      // console.log(this.books);
    });
  }
}
