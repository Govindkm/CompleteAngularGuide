import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.interface';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe:Recipe;
  constructor(private shoppingListService: ShoppingListService) {
   }

  ngOnInit(): void {
  }

  addToShoppingList(){
    this.shoppingListService.addIngredients= this.recipe.ingredient;
  }

}
