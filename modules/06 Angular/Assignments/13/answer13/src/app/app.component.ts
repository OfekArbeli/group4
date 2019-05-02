import { Component, OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quizes:Quiz[];
  constructor(private quizService: QuizService){

  }
  ngOnInit(){
    this.quizes=this.quizService.getQuizes();
  }
  onSubmit(){
    //get all form data, check answer with service
  }
}
