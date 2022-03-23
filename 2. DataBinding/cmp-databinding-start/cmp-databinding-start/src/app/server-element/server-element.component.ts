import { Component, Input, OnInit } from '@angular/core';
import { element } from './server-element.interface';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: element;
  constructor() { }

  ngOnInit(): void {
  }

}
