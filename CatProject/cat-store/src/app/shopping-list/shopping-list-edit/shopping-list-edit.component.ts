import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Behavior } from "../../shared/behavior.model";
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import *  as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItem;

  @ViewChild("f")
  shoppingListForm: NgForm;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('shoppingList')
      .subscribe(
      data => {
        if (data.editedBehaviorIndex > -1) {
          this.editedItem = data.editedBehavior;
          this.editMode = true;
          this.shoppingListForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          });
        }
        else {
          this.editMode = false;
        }
      });
  }

  onSubmitBehavior(shoppingListForm: NgForm) {
    if (this.editMode) {
      this.editedItem.name = shoppingListForm.value.name;
      this.editedItem.amount = shoppingListForm.value.amount;

      this.store.dispatch(new ShoppingListActions.UpdateBehavior(this.editedItem));

      this.editMode = false;
    }
    else {
      this.store.dispatch(new ShoppingListActions.AddBehavior(new Behavior(shoppingListForm.value.name, shoppingListForm.value.amount)));
    }

    shoppingListForm.form.reset();
  }

  onDelete(shoppingListForm: NgForm) {
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.DeleteBehavior());
    }

    this.editMode = false;
    shoppingListForm.form.reset();
  }

  onClear(shoppingListForm: NgForm) {
    this.editMode = false;
    shoppingListForm.form.reset();
  }

  ngOnDestroy(): void {
    this.store.dispatch(new ShoppingListActions.StopEdit());
    this.subscription.unsubscribe();
  }
}
