import { Component } from '@angular/core';
import { BooksServiceService } from 'src/app/books-service.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor(private booksServiceService:BooksServiceService) { }

  onSubmitForm(f){
    const {search} = f.value;
    console.log(search);
    if(search.length>3){
      this.booksServiceService.searchBooks(search);
    }
  }
  loadMore(){
    this.booksServiceService.loadMoreBooks();
  }
}
