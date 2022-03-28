import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingrediennt } from "src/app/recipes/recipe.interface";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService{
    updateIngredient:Subject<boolean> = new Subject<boolean>();
    selectedIngredient: Subject<Ingrediennt> = new Subject<Ingrediennt>();

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
        let item = this._ingredients.find((item)=>item.name == ingredient.name);
        if(item){
            item.amount = ingredient.amount;
        }else{
            this._ingredients.push(ingredient);
        }
        this.updateIngredient.next(true);
    }

    public set addIngredients(ingredient:Ingrediennt[]){

        //spread operator to add ingredients
        ingredient.forEach(item=>{
            let i = this._ingredients.find((i)=>i.name==item.name);
            if(i)
            {
                let unit = i.amount.split(' ')[1];
                i.amount = (+i.amount.split(' ')[0] + +item.amount.split(' ')[0]) + ' ' + unit;
            }
            else{
                this.addIngredient = item;
            }
        });

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