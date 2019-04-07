import { Component, OnInit } from '@angular/core';
import { SignIn } from '../model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model = new SignIn('','');
  constructor() { }

  ngOnInit() {
  }

}
