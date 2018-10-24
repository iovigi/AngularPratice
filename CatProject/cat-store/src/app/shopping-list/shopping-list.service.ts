import { EventEmitter } from '@angular/core';

import { Behavior } from '../shared/behavior.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private behaviors: Behavior[] = [
        new Behavior("nasty", 1),
        new Behavior("nice", 5)
    ];

    added:Subject<Behavior> = new Subject<Behavior>();

    add(behavior: Behavior) {
        this.behaviors.push(behavior);
        this.added.next(behavior);
    }

    getBehaviors() {
        return this.behaviors.slice();
    }
}