import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const routes:Routes = [
    {path:'', component:HomeComponent, pathMatch:"full"},
    {path:'servers', component:ServersComponent, pathMatch:"full"},
    {path:'users', component:UsersComponent, pathMatch:"full"},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}