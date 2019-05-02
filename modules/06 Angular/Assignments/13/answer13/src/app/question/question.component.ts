import { Component, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() id:string;
  @Input() question:string;
  constructor(public QuizService: QuizService) { 
    this.question="";
    this.id="0";
  }
  ngOnInit() {
  }
}
