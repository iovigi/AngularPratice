import { Directive, HostListener, ElementRef, Renderer2,HostBinding } from "@angular/core";
import { element } from "@angular/core/src/render3/instructions";

@Directive({
    selector: "[appDropdown]"
})
export class DropdowDicrective {
    @HostBinding('class.open')
    private open: boolean;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    @HostListener("click")
    toggleOpen(eventData: Event) {
        this.open = !this.open;
    }
}