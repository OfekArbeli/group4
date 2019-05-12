import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent {
  @Input() time: number;
  interval: any;
  message: string;
  constructor() {
    this.time=300;
    this.message=null;
   }
   start(){
    if(!this.interval){
      this.interval = setInterval(() => {
        if(this.time>0){
          this.time--;
        }
        else{
          this.restart();
          this.message="Time's up!";
        }
      },1000)
    }
   }
   pause(){
    clearInterval(this.interval);
    this.interval=null;
   }
   restart(){
    clearInterval(this.interval);
    this.interval=null;
    this.time=300;
   }
}
