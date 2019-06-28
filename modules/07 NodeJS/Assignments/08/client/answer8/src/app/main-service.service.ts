import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {
  url: string;
  chatMessages: object[];
  searchResultMessages: object[];
  showSearchResults: boolean;
  constructor() { 
    this.url="http://localhost:4000";
    this.chatMessages = [];
    this.searchResultMessages = [];
    this.showSearchResults = false;
  }

  async getChatMessages(searchQuery?){
    if(searchQuery){
      const response = await fetch(this.url+'?searchQuery='+searchQuery);
      const data = await response.json();
      this.searchResultMessages = data.searchResultMessages;
      console.log(this.searchResultMessages);
    }
    else{
      const response = await fetch(this.url);
      const data = await response.json();
      this.chatMessages = data.chatMessages;
      console.log(this.chatMessages);
    }
  }

  async postNewChatMessage(username: string, message: string){
    const response = await fetch(this.url,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        author: username,
        message: message
      })
    });
    const data = await response.json();
    this.chatMessages = data.chatMessages;
    console.log(this.chatMessages);
  }

  async updateChatMessage(chatMessage){
    const url = `${this.url}/?ID=${chatMessage.ID}`
    const response = await fetch(url,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        author: chatMessage.author,
        message: chatMessage.message
      })
    });
    const data = await response.json();
    this.chatMessages = data.chatMessages;
    console.log(this.chatMessages);
  }

  async deleteChatMessage(ID){
    const url = `${this.url}/?ID=${ID}`
    const response = await fetch(url,{
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    this.chatMessages = data.chatMessages;
    console.log(this.chatMessages);
  }
}