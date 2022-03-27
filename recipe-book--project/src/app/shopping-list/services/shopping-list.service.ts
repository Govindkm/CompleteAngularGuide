import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingrediennt } from "src/app/recipes/recipe.interface";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService{
    updateIngredient:Subject<boolean> = new Subject<boolean>();

    private _ingredients:Ingrediennt[] = [
        {
          name:'Potato',
          amount:"2 kg"
        },
        {
          name:'Tomato',
          amount:'1 kg'
        }
      ]

    constructor(){}

    public get ingredients() : Ingrediennt[] {
        return this._ingredients.slice();
    }

    public set addIngredient(ingredient:Ingrediennt){
        this._ingredients.push(ingredient);
        this.updateIngredient.next(true);
    }

    public set addIngredients(ingredient:Ingrediennt[]){

        //spread operator to add ingredients
        this._ingredients.push(...ingredient);
        this.updateIngredient.next(true);
    }

    public deleteIngredient(ingredient: Ingrediennt){
        this._ingredients = this._ingredients.filter((ingred)=>{
            return ingred.name!==ingredient.name && ingred.amount !== ingredient.amount;
        });
        this.updateIngredient.next(true);
    }

    public clearIngredients(){
        this._ingredients = [];
        this.updateIngredient.next(true);
    }
    
}