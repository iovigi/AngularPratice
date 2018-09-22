import { Directive, ElementRef, OnInit, Input } from "@angular/core"

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
        this.elementRef.nativeElement.style.color = 'yellow';
    }
}