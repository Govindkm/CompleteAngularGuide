import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display:boolean=false;
  title = 'directives-basics';
  clickEventTimestamps: String[] = []; 
  toggleDisplay(){
    this.display = !this.display;
    this.clickEventTimestamps.push(new Date().toLocaleTimeString());
  }
}
