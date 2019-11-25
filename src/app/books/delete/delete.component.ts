import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {IBooks} from "../ibooks";
import {ActivatedRoute, Route, Router} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  bookDelete: IBooks;
  idBook: number = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.bookDelete = new class implements IBooks {
      id: number;
      title: string;
      author: string;
      description: string;
    };
    this.bookService.getAll()
      .subscribe(data => this.bookDelete = data.find(data => data.id === this.idBook))
  }

  delete(book) {
    this.bookService.deleteBooks(book.id).subscribe(date => {
      this.router.navigate(['/books']);
    });

  }
}
