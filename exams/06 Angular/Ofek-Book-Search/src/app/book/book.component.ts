import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book;
  toggleMoreDetails:boolean;
  constructor() { 
    this.toggleMoreDetails=false;
  }

  showMore(){
    this.toggleMoreDetails=!this.toggleMoreDetails;
  }

}
