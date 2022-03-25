import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggedIn: {admin: boolean} | boolean = false;
  constructor() { }

  isAuthenticated(): Promise<{admin: boolean} | boolean>{
    return new Promise((resolve)=>{
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    })
  }

  login(admin?:boolean){
    if(admin){
      this.loggedIn = {admin: admin}
    } else {
      this.loggedIn = true;
    }
  }

  logout(){
    this.loggedIn = false;
  }
}
