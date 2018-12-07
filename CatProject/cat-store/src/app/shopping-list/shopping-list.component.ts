import { Component, OnInit } from '@angular/core';
import { Behavior } from '../shared/behavior.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as ShoppingListActions from './store/shopping-list.actions';
import * as fromShoppingList from './store/shopping-list.reducers';
import * as fromApp from '../store/app.reducers';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit {
  private shoppingListState: Observable<{behaviors:Behavior[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
   this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(i: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(i));
  }
}
