import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.interface";

@Injectable({
    providedIn:'root'
})
export class RecipeService{
    private _recipes: Recipe[] = [
        {
        name:'Samosa', 
        description: 'A samosa is a fried or baked pastry with a savory filling.', 
        imagePath:'https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900',        
        ingredient:[{name:'Potatoes', amount:'2 kg'}, {name: 'Flour', amount:'4 kg'}]
        },
        {
          name:'litti chokha',
          description: 'Litti, along with chokha, is a complete meal.',
          imagePath: 'https://static.toiimg.com/thumb/53188495.cms?width=1200&height=900',
          ingredient:[{name:'Tomatoes', amount:'1 kg'}, {name: 'Nuts', amount:'3 kg'}]
        }
      ];
    
    recipeSelect: EventEmitter<Recipe> = new EventEmitter<Recipe>();

    constructor(){}

    public get recipes() : Recipe[] {
        return this._recipes.slice();
    }

    public set recipe(recipe: Recipe){
        this._recipes.push(recipe);
    }
    
}