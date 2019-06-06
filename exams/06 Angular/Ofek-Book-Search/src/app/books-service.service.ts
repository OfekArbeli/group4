import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {
  api: string;
  books: object[];
  page:number;
  booktitle:string;
  moreResults:boolean;
  constructor(){
    this.api="https://www.googleapis.com/books/v1/volumes?key=AIzaSyDKKb0AjOM-UpM45JXEucq3StNYSGeLom4&q="
    this.page=0;
    this.books=[];
    this.booktitle="";
    this.moreResults = false;
  }
  searchBooks(bookName){
    this.moreResults = false;
    this.page=0;
    this.booktitle=bookName;
      fetch(this.api+bookName+'&startIndex='+this.page)
      .then((res)=>res.json())
      .then((data)=>{
        this.books=data.items;
        this.page+=10;
        this.checkForMoreResults();
      })
  }
  loadMoreBooks(){
    fetch(this.api+this.booktitle+'&startIndex='+this.page)
    .then((res)=>res.json())
    .then((data)=>{
      this.books=this.books.concat(data.items);
      this.page+=10;
      this.checkForMoreResults();
    })
  }
  checkForMoreResults(){
    let futurePage = this.page+10;
    fetch(this.api+this.booktitle+'&startIndex='+futurePage)
    .then((res)=>res.json())
    .then((data)=>{
      if(data.items){
        this.moreResults = true;
      }
      else{
        this.moreResults = false;
      }
    })
    .catch(function(error){
      this.moreResults = false;
    })
  }
}
