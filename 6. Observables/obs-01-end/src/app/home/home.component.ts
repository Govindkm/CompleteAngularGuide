import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription:Subscription[] = [];
  constructor() { }

  ngOnInit() {
    //Subscription should be closed otherwise it causes memory leaks which will end up utilizing the memory resources
    this.subscription.push(interval(1000).subscribe((data)=>{
      console.log('Interval : ', data);
    }));

    const customInterval = (timeout)=>{
      return new Observable(observer=>{
        let count=0;
        setInterval(()=>{
          observer.next(count--);
        }, timeout)
      })
    }

    //Custom interval
    this.subscription.push(customInterval(1000).subscribe((data)=>{
      console.log('Custom Interval : ', data);
    }));

  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=>{
      sub.unsubscribe();
    })
  }

}
