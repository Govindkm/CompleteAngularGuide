import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./authentication/auth.component";
import { RecipeDetailsComponent } from "./recipes/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeResolver } from "./shared/recipe.resolver";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes:Routes = [
    {path:'recipes', component:RecipesComponent, children:[
        {path:'', component:RecipeStartComponent},
        {path:'new', component:RecipeEditComponent},
        {path:':id', component:RecipeDetailsComponent, resolve:[RecipeResolver]},        
        {path:':id/edit', component:RecipeEditComponent, resolve:[RecipeResolver]}
    ]},
    {path:'shoppinglist', component:ShoppingListComponent},
    {path:'auth', component:AuthComponent},
    {path:'', redirectTo:'/recipes', pathMatch:'full'},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}