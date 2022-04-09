import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    user: any = null;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.user !== null) {
            return true;
        }
        else {
            this.router.navigate(['/auth'])
            return false;
        }
    }

    constructor(private router: Router) { }

    authenticate() {
        this.user = { 'something': 'is there' };
    }

    logOut() {
        this.user = null;
    }
}