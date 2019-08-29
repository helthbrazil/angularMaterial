import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPadding]'
})
export class PaddingDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.padding = '10px';
  }
}
