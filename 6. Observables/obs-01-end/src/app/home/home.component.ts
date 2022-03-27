import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription:Subscription;
  constructor() { }

  ngOnInit() {
    //Subscription should be closed otherwise it causes memory leaks which will end up utilizing the memory resources
    this.subscription = interval(1000).subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
