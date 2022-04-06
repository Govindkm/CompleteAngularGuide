import { Injectable, EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { Recipe } from "../recipe.interface";

@Injectable({
    providedIn:'root'
})
export class RecipeService{
    private _recipes: Recipe[] = [];
    
    recipeSelect: EventEmitter<Recipe> = new EventEmitter<Recipe>();
    private getAllRecipes: Subject<Recipe[]> = new Subject();

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
        let found: Recipe;
        if(found = this._recipes.find(r => r.id === recipe.id)){
            found.description = recipe.description;
            found.ingredient = recipe.ingredient;
            found.imagePath = recipe.imagePath;
            found.name = recipe.name;
            found.id = recipe.id;
        }
        else{
            this._recipes.push(recipe);
        }

        this.saveRecipes();
    }

    public saveRecipes(){
        this.dataStorage.saveRecipes(this._recipes);
    }

    public deleteRecipe(recipe:Recipe){
        this._recipes = this._recipes.filter((item)=>item.id != recipe.id);
        this.getAllRecipes.next(this._recipes);
    }
    
}