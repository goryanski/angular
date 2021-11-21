import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";


@Directive({
  selector: '[borderHover]'
})
export class BorderDirective {
  constructor(private elmtRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.elmtRef.nativeElement, 'border', '2px solid #dd0031');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.elmtRef.nativeElement, 'border', '2px solid #1976d2');
  }
}
