import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBooks} from "../books/ibooks";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  // BookUrl = `http://[::]:8081`;
  BookUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IBooks[]> {
    return this.http.get<IBooks[]>(this.BookUrl + '/books');
  }

  createBooks(book: IBooks): Observable<IBooks> {
    return this.http.post<IBooks>(this.BookUrl + '/books', book);
  }

  updateBooks(idBook: number,book: IBooks): Observable<IBooks> {
    return this.http.put<IBooks>(this.BookUrl + '/books/' + idBook, book);
  }

  deleteBooks(idBook: number): Observable<IBooks> {
    // return this.http.delete<IBooks>(this.BookUrl + '/books', idBook);
    return this.http.delete<IBooks>(this.BookUrl + '/books/' + idBook);
  }

}
