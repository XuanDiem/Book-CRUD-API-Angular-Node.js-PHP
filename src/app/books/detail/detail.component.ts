import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";
import {IBooks} from "../ibooks";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  bookDetail: IBooks;
  idBook: number = +this.activatedRoute.snapshot.paramMap.get('id');

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.bookService.getAll().subscribe(data =>
      this.bookDetail = data.find(book => book.id === this.idBook));
  }

}
