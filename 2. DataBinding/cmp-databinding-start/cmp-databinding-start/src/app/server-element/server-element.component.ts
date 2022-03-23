import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { element } from './server-element.interface';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input('alias') element: element;

  //Contentchild is used when the we want to access dom elementref which is passed as content to the component dom and we are using ng-content directive to render it.
  @ContentChild('paragraphContent') contentElement: ElementRef;

  //Lifecycle hooks in order of their executions
  //-------------------------------------------------------------------
  // constructor is the first method to get invoked and gets invoked only once when object instantiates
  constructor() {
    console.warn("Constructor is not implemented");
   }  
  // ngOnChanges is called after the constructor for the first time and then everytime the @Input parameters(dom parameters) changes it is called
  ngOnChanges(changes: SimpleChanges): void {
    console.warn('ngOnChanges Method not implemented.');
    console.log(changes);
  }
  // ngOnInit is called once the component is initialized 
  ngOnInit(): void {
    console.warn('ngOnInit Method not implemented.');
    console.log(`%c${this.contentElement}`, "background-color:green;");
  }
  // ngDoCheck is called after the ngOnInit hook and is called whenever any event occurs on the dom. It is the best method to manually check the events
  ngDoCheck(): void {
    console.warn('ngDoCheck Method not implemented.');
  }
  // Called after content (ng-content) has been projected into view
  ngAfterContentInit(): void {
    console.warn('ngAfterContentInit Method not implemented.');
    console.log(`%c${this.contentElement}`, "background-color:green;")
  }
  // Called every time the projected content has been checked
  ngAfterContentChecked(): void {
    console.warn('ngAfterContentChecked Method not implemented.');
  }
  // Called after the component’s view (and child views) has been initialized
  ngAfterViewInit(): void {
    console.warn('ngAfterViewInit Method not implemented.');
  }
  // Called every time the view (and child views) have been checked
  ngAfterViewChecked(): void {
    console.warn('ngAfterViewChecked Method not implemented.');
  }
  // Called once the component is about to be destroyed
  ngOnDestroy(): void {
    console.warn('ngOnDestroy Method not implemented.');
  }  
  //
  // ------------------------------------------------------------------


}
