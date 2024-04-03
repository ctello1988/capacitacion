import { Directive, ElementRef, HostListener, input, Renderer2, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[upperCase]',
  standalone: true
})
export class UpperCaseDirective {

  upperCase = input<boolean>();

  constructor(
    private el: ElementRef,
    private render: Renderer2,
    @Self() private ngCtrl: NgControl
  ) { }

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent): void {
    const value = this.ngCtrl.value;
    // if (isNaN(value)) {
    //   this.render.setProperty(this.el.nativeElement, 'value', 0);
    //   return;
    // }
    this.render.setProperty(this.el.nativeElement, 'value', this.upperCase() ? value.toUpperCase() : value.toLowerCase());
  }

}
