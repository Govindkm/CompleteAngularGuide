import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.interface';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',
  styleUrls: ['./recipe-items.component.css']
})
export class RecipeItemsComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { 
    console.log(this.recipe);
  }

  ngOnInit(): void {
    console.log("Check:", this.recipe);
  }

}
