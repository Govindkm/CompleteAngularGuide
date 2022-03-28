import { Injectable, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.interface";

@Injectable({
    providedIn:'root'
})
export class RecipeService{
    private _recipes: Recipe[] = [
        {
        id:'0',
        name:'Samosa', 
        description: 'A samosa is a fried or baked pastry with a savory filling.', 
        imagePath:'https://static.toiimg.com/thumb/61050397.cms?width=1200&height=900',        
        ingredient:[{name:'Potatoes', amount:'2 kg'}, {name: 'Flour', amount:'4 kg'}]
        },
        {
          id:'1',
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

    public getRecipe(id:string):Recipe{
        return this._recipes.slice().find((rec)=>{
            return rec.id == id;
        })
    }

    public set recipe(recipe: Recipe){
        if(+recipe.id<=this._recipes.length)
            {
                let item = this._recipes.find((i)=>i.id == recipe.id);
                item.description = recipe.description;
                item.name = recipe.name;
                item.imagePath = recipe.imagePath;
                item.ingredient = recipe.ingredient;
            }
        else
        {
            recipe.id = this._recipes.length.toString();
            this._recipes.push(recipe);
        }
    }
    
}