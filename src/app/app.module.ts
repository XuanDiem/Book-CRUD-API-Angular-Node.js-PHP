import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BooksComponent } from './books/books.component';
import { AddComponent } from './books/add/add.component';
import { HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditComponent } from './books/edit/edit.component';
import { DetailComponent } from './books/detail/detail.component';
import { DeleteComponent } from './books/delete/delete.component';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    AddComponent,
    EditComponent,
    DetailComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
