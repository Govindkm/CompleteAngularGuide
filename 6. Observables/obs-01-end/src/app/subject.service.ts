import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService implements OnInit {
  activate:Subject<boolean>;
  isActivated: boolean = false;
  constructor() {
    this.activate = new Subject<boolean>()
   }

   ngOnInit(): void {
     this.activate.subscribe((data)=>{this.isActivated = data})
   }

}
