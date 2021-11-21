import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: '[shadowClick]'
})
export class ShadowDirective {
  constructor(private elmtRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onMouseClick() {
    this.renderer.setStyle(this.elmtRef.nativeElement, 'box-shadow', '5px 5px 10px #909190');
  }
}
