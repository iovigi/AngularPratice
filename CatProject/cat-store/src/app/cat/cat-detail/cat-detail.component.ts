import { Component, OnInit } from '@angular/core';
import { Cat } from "../cat.model";
import { ActivatedRoute, Params } from "@angular/router"
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Behavior } from '../../shared/behavior.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import *  as ShoppingListActions from '../../shopping-list/store/shopping-list.actions';
import * as fromShoppingList from '../../shopping-list/store/shopping-list.reducers';
import * as fromApp from '../../store/app.reducers';
import * as fromCat from '../store/cat.reducers';
import * as catActions from '../store/cat.actions';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {
  catState: Observable<fromCat.State>;
  id: number;

  constructor(private store: Store<fromCat.FeatureState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];

    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id'];
        this.catState = this.store.select('cats');
      });
  }

  toShoppingList() {
    this.store.select('cats')
      .pipe(take((1)))
      .subscribe((state: fromCat.State) => {
        this.store.dispatch(new ShoppingListActions.AddBehaviors(state.cats[this.id].behaviors));
      });
  }

  deleteCat() {
    this.store.dispatch(new catActions.DeleteCat(this.id));
    this.router.navigate(['/cats']);
  }
}
