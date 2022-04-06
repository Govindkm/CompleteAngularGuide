import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.interface";

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
                    ingredient: data[recipeKey].ingredient
                }
                recipesArray.push(recipe);
            }

            return recipesArray;
        }));
    }

    addRecipe(recipe: Recipe){
        this.http.post(`${this._URL}recipes.json`, recipe).subscribe((data)=>{console.log(data)});
    }
}