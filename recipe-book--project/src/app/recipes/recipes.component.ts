import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.interface';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe = null;
  constructor(private recipeService: RecipeService) { 
    recipeService.recipeSelect.subscribe((recipe)=>{
      this.selectedRecipe = recipe;
    })
  }

  ngOnInit(): void {
  }

}