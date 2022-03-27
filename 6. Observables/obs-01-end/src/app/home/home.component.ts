import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

import { filter, map } from 'rxjs/operators';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription:Subscription[] = [];
  isActivated:boolean = false;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.subjectService.activate.subscribe((data)=>{
      this.isActivated = data;
    })

    //Subscription should be closed otherwise it causes memory leaks which will end up utilizing the memory resources
    this.subscription.push(interval(1000).subscribe((data)=>{
      console.log('Interval : ', data);
    }));

    const customInterval = (timeout)=>{
      return new Observable(observer=>{
        let count=0;
        setInterval(()=>{
          observer.next(count--);
          if(count<-5){
            observer.complete();
          }
        }, timeout);
      })
    }

    //Custom interval
    this.subscription.push(customInterval(1000).pipe(filter((data:number)=>{return data%2==0}), map((data:number)=>{
      return "Custom Intrval : " + data;
    })).subscribe((data)=>{
      console.log(data);
    },
    error=>{console.log(error)},
    ()=>{
      console.log('Completed!!!');
    }
    ));

  }

  ngOnDestroy(): void {
    this.subscription.forEach(sub=>{
      sub.unsubscribe();
    })
  }

}
