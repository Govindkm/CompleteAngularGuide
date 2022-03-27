import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const routes:Routes = [
    {path:'', component:RecipesComponent},
    {path:'shoppinglist', component:ShoppingListComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}