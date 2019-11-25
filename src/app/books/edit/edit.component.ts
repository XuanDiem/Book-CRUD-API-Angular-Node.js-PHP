import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {IBooks} from "../ibooks";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  book: IBooks;
  idBook: number = +this.activatedRoute.snapshot.paramMap.get('id');
  updateFormBook = this.fb.group({
    id: [this.idBook],
    title: ['', [Validators.required, Validators.minLength(4)]],
    author: ['', [Validators.required]],
    description: ['', [Validators.required]],
  });

  constructor(private bookService: BookService,
              private router: Router,
              private fb: FormBuilder,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.book = new class implements IBooks {
      id: number;
      title: string;
      author: string;
      description: string;
    };
    this.bookService.getAll().subscribe(
      res => this.book = res.find(book => book.id === this.idBook)
    )
  }

  submit() {
    this.bookService.updateBooks(this.idBook,this.updateFormBook.value)
      .subscribe(result => this.router.navigate(['/books']));
  }

  get id() {
    return this.updateFormBook.get('id');
  }

  get title() {
    return this.updateFormBook.get('title');
  }

  get author() {
    return this.updateFormBook.get('author');
  }

  get description() {
    return this.updateFormBook.get('description');
  }
}
