import { Injectable } from '@angular/core';
import { NewAccountComponent } from '../new-account/new-account.component';

@Injectable({
  providedIn: NewAccountComponent
})
export class LoggerService {

  constructor() { }
  log(message){
    console.log("Logging data : ", message);
  }
}
