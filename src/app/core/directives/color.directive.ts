import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[colorContainer]',
  standalone: true
})
export class ColorDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseenter') mouseenter() {
    this.el.nativeElement.style.backgroundColor = 'gray';
  }
  @HostListener('mouseleave') mouseleave() {
    this.el.nativeElement.style.backgroundColor = 'pink';
  }

}
