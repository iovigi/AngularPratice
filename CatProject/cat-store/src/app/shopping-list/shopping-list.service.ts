import { EventEmitter } from '@angular/core';

import { Behavior } from '../shared/behavior.model';

export class ShoppingListService {
    private behaviors: Behavior[] = [
        new Behavior("nasty", 1),
        new Behavior("nice", 5)
    ];

    added:EventEmitter<Behavior> = new EventEmitter<Behavior>();

    add(behavior: Behavior) {
        this.behaviors.push(behavior);
        this.added.emit(behavior);
    }

    getBehaviors() {
        return this.behaviors.slice();
    }
}