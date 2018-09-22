import {
  Directive,
  OnInit,
  Renderer2,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input()
  defaultColor="red";

  @Input('appBetterHighlight')
  highlightColor="white";
  
  @HostBinding("style.backgroundColor")
  private backGroundColor: string = "yellow";

  @HostBinding("style.color")
  private color: string = this.defaultColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
     this.color = this.defaultColor;
  }

  @HostListener("mouseenter")
  mouseenter(eventData: Event) {
    this.backGroundColor = "black";
    this.color = this.highlightColor;
  }

  @HostListener("mouseleave")
  mouseleave(eventData: Event) {
    this.backGroundColor = "yellow";
    this.color = this.defaultColor;
  }
}
