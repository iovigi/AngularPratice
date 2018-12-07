import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { Behavior } from '../shared/behavior.model';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import *  as ShoppingListActions from '../shopping-list/store/shopping-list.actions';

@Injectable()
export class CatService {
    catsChanged: Subject<Cat[]> = new Subject<Cat[]>();

    private cats: Cat[] = [];

    constructor(private store:Store<{shoppingList:{behaviors:Behavior[]}}>) { }

    init(cats: Cat[]) {
        this.cats = cats;
        this.catsChanged.next(this.cats.slice());
    }

    getCats() {
        return this.cats.slice();
    }

    getCat(idx: number) {
        return this.cats[idx];
    }

    addBehaviorsToShoppingList(behaviors: Behavior[]) {
        this.store.dispatch(new ShoppingListActions.AddBehaviors(behaviors));
    }

    addCat(cat: Cat) {
        this.cats.push(cat);
        this.catsChanged.next(this.cats.slice());
    }

    updateCat(index: number, newCat: Cat) {
        this.cats[index] = newCat;
        this.catsChanged.next(this.cats.slice());
    }

    deleteCat(index: number) {
        this.cats.splice(index, 1);
        this.catsChanged.next(this.cats.slice());
    }
}