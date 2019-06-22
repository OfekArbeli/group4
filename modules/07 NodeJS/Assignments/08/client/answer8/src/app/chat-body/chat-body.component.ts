import { Component } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-chat-body',
  templateUrl: './chat-body.component.html',
  styleUrls: ['./chat-body.component.css']
})
export class ChatBodyComponent {

  constructor(private mainService:MainServiceService) {
    this.mainService.getChatMessages();
    console.log(this.mainService.chatMessages);
   }

}
