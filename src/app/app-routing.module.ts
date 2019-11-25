import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooksComponent} from "./books/books.component";
import {AddComponent} from "./books/add/add.component";
import {EditComponent} from "./books/edit/edit.component";
import {DetailComponent} from "./books/detail/detail.component";
import {DeleteComponent} from "./books/delete/delete.component";


const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'add', component: AddComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'delete/:id', component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
