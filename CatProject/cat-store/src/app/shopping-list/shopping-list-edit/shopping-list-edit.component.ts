import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Behavior } from "../../shared/behavior.model"
import { ShoppingListService } from '../shopping-list.service';

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

  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
  }

  onAddBehavior() {
    this.shoppingListService.add(new Behavior(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }
}
