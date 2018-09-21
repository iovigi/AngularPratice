import { Component, OnInit, ViewChild, ElementRef, EventEmitter,Output } from '@angular/core';
import { Behavior } from "../../shared/behavior.model"

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild("nameInput")
  nameInputRef: ElementRef;

  @ViewChild("amountInput")
  amountInputRef: ElementRef;

  @Output()
  added = new EventEmitter<Behavior>();

  constructor() { }

  ngOnInit() {
  }

  onAddBehavior() {
    this.added.emit(new Behavior(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }
}
