import { Component, ElementRef, ViewChild } from '@angular/core';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('refele') element!:TwoWayBindingComponent;
  input="initial";
  constructor(){}
  resetInput(){
    console.log("Reset is called");
    this.input="";
    this.element.inputText = "";
  }
}
