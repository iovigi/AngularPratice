import { EventEmitter, Injectable } from '@angular/core';

import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Cat } from './cat.model';
import { Behavior } from '../shared/behavior.model';

@Injectable()
export class CatService {
    private cats: Cat[] = [
        new Cat("test", "test", "https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg", [new Behavior("touching heart", 2)]),
        new Cat("test", "test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuN7f1YONvVzPSSmTp7nNBQGQglSjR6L4Hz37EC8yZIMk_HVhVQ", [new Behavior("nasty", 1)])
    ];

    catSelected: EventEmitter<Cat> = new EventEmitter<Cat>();

    constructor(private shoppingListService: ShoppingListService) { }

    getCats() {
        return this.cats.slice();
    }

    selectCat(cat: Cat) {
        this.catSelected.emit(cat);
    }

    addBehaviorsToShoppingList(behaviors: Behavior[]) {
        for (let i: number = 0; i < behaviors.length; i++) {
            let behavior = behaviors[i];

            this.shoppingListService.add(behavior);
        }
    }
}