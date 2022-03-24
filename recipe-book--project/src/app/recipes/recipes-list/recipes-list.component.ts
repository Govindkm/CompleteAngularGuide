import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  constructor(private recipeService: RecipeService) { 

  }

  ngOnInit(): void {
    this.recipes = this.recipeService.recipes;
  }

}
