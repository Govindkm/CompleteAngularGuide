import { Component, ViewEncapsulation } from '@angular/core';
import { element } from './server-element/server-element.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None // ShadowDom, Emulated(default)
})
export class AppComponent {
  src = "../assets/lifecycle.pdf"
  serverElements:element[] = [];

  onChangeServerElements(elements){
    this.serverElements = elements;
  }
}
