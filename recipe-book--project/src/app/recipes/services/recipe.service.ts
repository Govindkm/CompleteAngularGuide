import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "src/app/Shared/data-storage.service";
import { Recipe } from "../recipe.interface";

@Injectable({
    providedIn:'root'
})
export class RecipeService{
    private _recipes: Recipe[] = [];
    
    recipeSelect: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    getAllRecipes: Subject<Recipe[]> = new Subject();

    constructor(private dataStorage: DataStorageService){}

    public get recipes() : Subject<Recipe[]> {
        this.dataStorage.fetchRecipes().subscribe((data)=>{
            this._recipes = data;
            this.getAllRecipes.next(this._recipes);
        });

        return this.getAllRecipes;
    }

    public getRecipe(id:string):Recipe{
        return this._recipes.slice().find((rec)=>{
            return rec.id === id;
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