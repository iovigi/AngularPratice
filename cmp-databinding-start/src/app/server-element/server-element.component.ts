import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChange,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,
 DoCheck,AfterContentInit, AfterContentChecked, AfterContentInit, AfterContentChecked, OnDestroy {

  @Input("srvElement")
  element: { type: string, name: string, content: string };
  @Input()
  name = "test";

  @ViewChild("header")
  header : ElementRef;

  @ContentChild("contentParagraph")
  paragragp:ElementRef;

  constructor() {
    console.log("constr");
    console.log(this.header);
  }

  ngOnChanges(changes) {
    console.log("on changes");
    console.log(changes);
    console.log(this.header);
  }

  ngOnInit() {
    console.log("oninit");
    console.log(this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("do check");
    console.log(this.header);
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
    console.log(this.header);
    console.log(this.header.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
    console.log(this.header);
    console.log(this.paragragp);
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
    console.log(this.header);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    console.log(this.header);
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    console.log(this.header);
  }
}
