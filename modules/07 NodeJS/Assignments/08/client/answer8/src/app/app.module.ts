import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';
import { ChatBodyComponent } from './chat-body/chat-body.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatFooterComponent,
    ChatBodyComponent,
    ChatMessageComponent,
    ChatHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
