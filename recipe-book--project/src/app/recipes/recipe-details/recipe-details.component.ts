import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe:Recipe;
  constructor(private shoppingListService: ShoppingListService, private route:ActivatedRoute, private recipeService:RecipeService, private router:Router) {
   }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe( this.route.snapshot.params['id']);
    this.route.params.subscribe((para)=>{
      if(para['id']){
        this.recipe = this.recipeService.getRecipe(para['id']);
      }
    })
  }

  addToShoppingList(){
    this.shoppingListService.addIngredients= this.recipe.ingredient;
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.recipe);
    this.router.navigate(['/'])
  }

}
