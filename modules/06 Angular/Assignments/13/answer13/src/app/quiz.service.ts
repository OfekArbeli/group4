import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizs:Quiz[];
  constructor() { 
    this.quizs=[];
    this.createFakeQuestions();
  }
  createFakeQuestions(){
    for(let i=0;i<10;i++){
      let ID = i;
      let question = `what is John snow hair color-${i}?`
      let answers=["blue","yellow","orange","black"];
      let correctAnswerIndex = 3;
      this.quizs.push(new Quiz(ID,question,answers,correctAnswerIndex));
    }
  }
  getQuizes(){
    return this.quizs;
  }
  checkResutls(){
    //return how many correct answers
  }
}
