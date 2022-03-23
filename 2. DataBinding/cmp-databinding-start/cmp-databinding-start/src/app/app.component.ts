import { Component } from '@angular/core';
import { element } from './server-element/server-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:element[] = [];

  onChangeServerElements(elements){
    this.serverElements = elements;
  }
}
