import { EventEmitter } from '@angular/core';

import { Behavior } from '../shared/behavior.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
    private behaviors: Behavior[] = [
        new Behavior("nasty", 1),
        new Behavior("nice", 5)
    ];

    startedEditting = new Subject<number>();
    updateList: Subject<Behavior[]> = new Subject<Behavior[]>();

    add(behavior: Behavior) {
        this.behaviors.push(behavior);
        this.updateList.next(this.behaviors.slice());
    }

    delete(index: number) {
        this.behaviors.splice(index, 1);
        this.updateList.next(this.behaviors.slice());
    }

    update(index: number, behavior: Behavior) {
        this.behaviors[index] = behavior;
        this.updateList.next(this.behaviors.slice());
    }

    getBehaviors() {
        return this.behaviors.slice();
    }

    getBehavior(index: number) {
        return this.behaviors.slice(index)[0];
    }
}