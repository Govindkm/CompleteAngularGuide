import { Component, EventEmitter, Output } from "@angular/core";
import { RecipeService } from "../recipes/services/recipe.service";
@Component({
    selector:"app-header",
    templateUrl:"./header.component.html",
    styleUrls:["./header.component.css"]
})
export class HeaderComponent{
constructor(private recipeService:RecipeService){}
onSave()
{
    this.recipeService.saveRecipes();
}
onFetch(){
    this.recipeService.recipes;
}
}