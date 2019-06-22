import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // submit(e,search){
  //   e.preventDefault();
  //   console.log(search.value);
  //   fetch('http://localhost:4200?' + search.value)
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(myJson) {
  //     console.log(JSON.stringify(myJson));
  //   });
  // }
  const url:string;
  constructor(){
    this.url="http://localhost:8000";
  };

  onSubmit(f){
    const {searchQuery} = f.value;
    if(searchQuery.length>2){
      this.postData(searchQuery);
    }
  }

  async sendMessage(message){
    const response = await fetch(this.url,{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: message
    });
    const data = await response.json();
    console.log(data);
  }

  postData(data) {
    // Default options are marked with *
      return fetch(this.url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native Javascript objects 
  }


}
