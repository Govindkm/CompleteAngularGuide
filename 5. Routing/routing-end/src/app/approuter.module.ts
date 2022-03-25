import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

export const components = [EditServerComponent, ServerComponent, ServersComponent, UserComponent, UsersComponent];

const routes:Routes = [
    {path:'', component: HomeComponent, pathMatch:"full"},
    {path:'servers', component: ServersComponent,  canActivate:[AuthGuardService], canActivateChild:[AuthGuardService],children:[
        {path:':id/edit', component: EditServerComponent,},
    ]},
    {path:'users', component: UsersComponent, children:[
        {path:':id', component: UserComponent, pathMatch:"full"},
    ] },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}