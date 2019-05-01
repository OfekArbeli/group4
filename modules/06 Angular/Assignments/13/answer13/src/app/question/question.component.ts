import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() question:string;
  @Input() correctAnswerIndex:number
  constructor(public QuizService: QuizService) { 
    this.question="";
    this.correctAnswerIndex=0;
  }

  ngOnInit() {
    this.passAnswersToService();
  }
  passAnswersToService() {
    this.QuizService.setQuiz(this.question,this.correctAnswerIndex);
  }

}
