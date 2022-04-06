import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.interface";
import { RecipeService } from "../recipes/services/recipe.service";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService{
    private _URL:string = 'https://recipebook-fake-default-rtdb.asia-southeast1.firebasedatabase.app/';
    constructor(private http: HttpClient){}
    fetchRecipes(){
        return this.http.get(`${this._URL}recipes.json`).pipe(map(data=>{
            let recipesArray:Recipe[]=[];
            for (let recipeKey in data){
                let recipe: Recipe = {
                    description: data[recipeKey].description,
                    id: recipeKey,
                    name:  data[recipeKey].name,
                    imagePath: data[recipeKey].imagePath,
                    ingredient: data[recipeKey] ? data[recipeKey].ingredient : []
                }
                recipesArray.push(recipe);
            }

            return recipesArray;
        }));
    }

    saveRecipes(recipes:Recipe[]){
        return this.http.put(`${this._URL}recipes.json`, recipes).subscribe((data)=>{
            console.log(data);
        })
    }
}