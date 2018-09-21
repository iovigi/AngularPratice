import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor")
  private backGroundColor: string = "yellow";

  @HostBinding("style.color")
  private color: string = "red";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener("mouseenter")
  mouseenter(eventData: Event) {
    this.backGroundColor = "black";
    this.color = "white";
  }

  @HostListener("mouseleave")
  mouseleave(eventData: Event) {
    this.backGroundColor = "yellow";
    this.color = "red";
  }
}
