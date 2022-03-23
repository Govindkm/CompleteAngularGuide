import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { element } from '../server-element/server-element.interface';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() changeServerElement: EventEmitter<element[]> = new EventEmitter<element[]>();
  serverElements:element[] = [];
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() {
    this.serverElements.push({
      type: 'server',
      name: this.newServerName,
      content: this.newServerContent
    });
    this.changeServerElement.emit(this.serverElements);
  }

  onAddBlueprint() {
    this.serverElements.push({
      type: 'blueprint',
      name: this.newServerName,
      content: this.newServerContent
    });
    this.changeServerElement.emit(this.serverElements);
  }
}
