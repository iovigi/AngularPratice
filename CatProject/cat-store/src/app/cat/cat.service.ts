import { Injectable } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Cat } from './cat.model';
import { Behavior } from '../shared/behavior.model';
import { Subject } from 'rxjs';

@Injectable()
export class CatService {
    catsChanged: Subject<Cat[]> = new Subject<Cat[]>();

    private cats: Cat[] = [
        new Cat("test", "test", "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", [new Behavior("touching heart", 2)]),
        new Cat("test", "test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuN7f1YONvVzPSSmTp7nNBQGQglSjR6L4Hz37EC8yZIMk_HVhVQ", [new Behavior("nasty", 1)])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getCats() {
        return this.cats.slice();
    }

    getCat(idx: number) {
        return this.cats[idx];
    }

    addBehaviorsToShoppingList(behaviors: Behavior[]) {
        for (let i: number = 0; i < behaviors.length; i++) {
            let behavior = behaviors[i];

            this.shoppingListService.add(behavior);
        }
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