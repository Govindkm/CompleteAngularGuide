import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reset-button',
  templateUrl: './reset-button.component.html',
  styleUrls: ['./reset-button.component.css']
})
export class ResetButtonComponent implements OnInit {
  @Output()
  reset:EventEmitter<null> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
