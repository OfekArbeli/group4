import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent{

  constructor(private mainService:MainServiceService) { }

  onSubmitForm(f){
    const {searchQuery} = f.value;
    if(searchQuery.length > 2){
      this.mainService.getChatMessages(searchQuery);
      this.mainService.showSearchResults = true;
    }
  }
  search(f){
    f.resetForm();
    this.mainService.showSearchResults = false;
  }
}
