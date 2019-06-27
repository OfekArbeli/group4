import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.css']
})
export class ChatFooterComponent {

  constructor(private mainService:MainServiceService) { }

  onSubmitForm(f){
    this.mainService.postNewChatMessage(f.value.username,f.value.message);
    this.mainService.showSearchResults = false;
    f.reset();
  }
}
