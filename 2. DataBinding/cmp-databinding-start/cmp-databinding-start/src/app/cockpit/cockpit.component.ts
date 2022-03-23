import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { element } from '../server-element/server-element.interface';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() changeServerElement: EventEmitter<element[]> = new EventEmitter<element[]>();
  @ViewChild('serverNameElement') newServerName:HTMLInputElement;
  serverElements:element[] = [];
  newServerContent = '';
  constructor() { }
  ngOnInit(): void {
  }
  onAddServer(newServerNameElement:HTMLInputElement) {
    console.log(newServerNameElement);
    this.serverElements.push({
      type: 'server',
      name: newServerNameElement.value,
      content: this.newServerContent
    });
    this.changeServerElement.emit(this.serverElements);
  }

  onAddBlueprint() {
    console.log(this.newServerName);
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName['nativeElement'].value,
      content: this.newServerContent
    });
    this.changeServerElement.emit(this.serverElements);
  }
}
