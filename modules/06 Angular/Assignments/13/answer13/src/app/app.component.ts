import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quizes:Quiz[];
  submitted:boolean;
  constructor(private quizService: QuizService){
    this.submitted = false;
  }
  ngOnInit(){
    this.quizes=this.quizService.getQuizes();
  }
  onSubmit(f: NgForm){
    this.submitted=true;
    console.log(f);
  }

}
