import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer:boolean;
  constructor(){
    this.timer=true;
  }
  toggleNav(timerType){
    if(timerType==="timer"){
      this.timer=true;
    }
    else 
      this.timer=false;
  }
}
