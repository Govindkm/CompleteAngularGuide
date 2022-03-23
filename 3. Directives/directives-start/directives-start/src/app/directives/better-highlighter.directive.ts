import { ApplicationInitStatus, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter]'
})
export class BetterHighlighterDirective implements OnInit {

  constructor(private renderer:Renderer2, private eleRef:ElementRef) { }

  ngOnInit(): void {
    // Renderer2 is used when we are not working with the DOM based ApplicationInitStatus(eg. Native Applications)
    this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'green');
  }
}
