import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements OnInit {

  //Use Subjects only if the communication required is between the components. It is not suitable for dom events and therefore instead use EventEmitter instead of subjects for creating events that need to handled on dom
  

  activate:Subject<boolean>;
  isActivated: boolean = false;
  constructor() {
    this.activate = new Subject<boolean>()
   }

   ngOnInit(): void {
     this.activate.subscribe((data)=>{this.isActivated = data})
   }

}
