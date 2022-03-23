import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  allNumbers = [1, 2, 3, 4, 5];
  onlyOdd = false;

  numbers():Number[]{
    if(this.onlyOdd){
      return this.allNumbers.filter((ele)=>ele%2);
    }

    return this.allNumbers.filter((ele)=>ele%2==0);
  }
}
