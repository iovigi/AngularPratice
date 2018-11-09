import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Behavior } from "../../shared/behavior.model"
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex;
  editedItem;

  @ViewChild("f")
  shoppingListForm: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditting.subscribe(indx => {
      this.editedItemIndex = indx;
      this.editMode = true;
      this.editedItem = this.shoppingListService.getBehavior(indx);
      this.shoppingListForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    })
  }

  onSubmitBehavior(shoppingListForm: NgForm) {
    if (this.editMode) {
      this.editedItem.name = shoppingListForm.value.name;
      this.editedItem.amount = shoppingListForm.value.amount;

      this.shoppingListService.update(this.editedItemIndex, this.editedItem);

      this.editMode = false;
    }
    else {
      this.shoppingListService.add(new Behavior(shoppingListForm.value.name, shoppingListForm.value.amount));
    }

    shoppingListForm.form.reset();
  }

  onDelete(shoppingListForm: NgForm) {
    if (this.editMode) {
      this.shoppingListService.delete(this.editedItemIndex);
    }

    this.editMode = false;
    shoppingListForm.form.reset();
  }

  onClear(shoppingListForm: NgForm) {
    this.editMode = false;
    shoppingListForm.form.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
