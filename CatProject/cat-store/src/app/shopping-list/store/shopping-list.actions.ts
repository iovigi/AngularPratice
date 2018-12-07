import { Action } from '@ngrx/store'
import { Behavior } from '../../shared/behavior.model';

export const ADD_BEHAVIOR = 'ADD_BEHAVIOR';
export const ADD_BEHAVIORS = 'ADD_BEHAVIORS';
export const UPDATE_BEHAVIOR = 'UPDATE_BEHAVIOR';
export const DELETE_BEHAVIOR = 'DELETE_BEHAVIOR';
export const START_EDIT = 'START_EDIT';
export const STOP_EDIT = 'STOP_EDIT';

export class AddBehavior implements Action {
    type: string = ADD_BEHAVIOR;

    constructor(public payload: Behavior) { };
}

export class AddBehaviors implements Action {
    type: string = ADD_BEHAVIORS;

    constructor(public payload: Behavior[]) { };
}

export class UpdateBehavior implements Action {
    type: string = UPDATE_BEHAVIOR;

    constructor(public payload: { behavior: Behavior }) { };
}

export class DeleteBehavior implements Action {
    type: string = DELETE_BEHAVIOR;
}

export class StartEdit implements Action {
    type: string = START_EDIT;

    constructor(public payload: number) { };
}

export class StopEdit implements Action {
    type: string = STOP_EDIT;
}

export type ShoppingListActions = AddBehavior | AddBehaviors | UpdateBehavior | DeleteBehavior | StartEdit | StopEdit;