import { Component, OnInit } from '@angular/core';
import { Ingrediennt } from '../recipes/recipe.interface';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingrediennt[];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.ingredients;
    this.shoppingListService.updateIngredient.subscribe((condition)=>{
      if(condition){
        this.ingredients = this.shoppingListService.ingredients;
      }
    })
  }

  onSelectIngredient(item:Ingrediennt){
    this.shoppingListService.selectedIngredient.emit(item);
  }

  onAddIngredient(ingred:Ingrediennt){
    this.shoppingListService.addIngredient = ingred;
  }

  onDeleteIngredient(ingred:Ingrediennt){
    console.log(ingred);
    this.shoppingListService.deleteIngredient(ingred);
  }

  onClearIngredients(){
    this.shoppingListService.clearIngredients();
  }

}
