import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHoverHostListner]'
})
export class HoverHostListnerDirective implements OnInit{
  @Input('appHoverHostListner') primaryColor: string = "yellow";
  @Input() secondaryColor: string = "gray";
  @HostBinding('style.backgroundColor') bgColor: string;

  constructor(private eleRef:ElementRef) { 
   }
  ngOnInit(): void {
    this.bgColor = this.primaryColor;
  }
  @HostListener('mouseover')
  mouseover(event: Event){
    this.bgColor = this.secondaryColor;
  }

  @HostListener('mouseleave')
  mouseExit(event: Event){
    this.bgColor = this.primaryColor;
  }

}
