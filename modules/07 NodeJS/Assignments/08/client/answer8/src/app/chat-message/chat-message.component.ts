import { Component, Input, ViewChild } from '@angular/core';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent {
  @Input() chatMessage;
  @ViewChild('messageValue') div; 
  removeAnimation: boolean;
  edit: boolean;
  constructor(private mainService:MainServiceService) { 
    this.chatMessage = {};
    this.removeAnimation = false;
    this.edit = false;
  }
  removeMessage(ID){
    this.removeAnimation = true;
    setTimeout(() => this.mainService.deleteChatMessage(ID),300);
  }
  enableEdit(){
    this.edit = true;
  }
  updateChatMessage(e){
    if(e){
      e.preventDefault();
    }
    let newMessage = this.div.nativeElement.innerText;
    let newChatMessage = {
      ID: this.chatMessage.ID,
      author: this.chatMessage.author,
      message: newMessage
    }
    console.log(newChatMessage);
    this.mainService.updateChatMessage(newChatMessage);
  }
}
