import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownHelper]'
})
export class DropdownHelperDirective {
  @HostBinding('class') classList: string;
  constructor(private elementRef:ElementRef) { }

  @HostListener('click')
  toggleDropdown(){
    this.elementRef.nativeElement.classList.toggle('open');
  }
}
