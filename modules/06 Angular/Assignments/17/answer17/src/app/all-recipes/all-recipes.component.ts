import { Component, OnInit } from '@angular/core';
import {Recipe} from 
@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  recipes: Recipe[];
  constructor() { }

  ngOnInit() {
  }

}
