import { Action } from "@ngrx/store";
import { Behavior } from "../../shared/behavior.model";

import * as ShoppingListActions from './shopping-list.actions';

export interface State {
    behaviors: Behavior[];
    editedBehavior: Behavior;
    editedBehaviorIndex: number;
}

const initialState: State = {
    behaviors: [],
    editedBehavior: null,
    editedBehaviorIndex: -1
};

export function shoppingListReducer(state = initialState, action: any) {
    switch (action.type) {
        case ShoppingListActions.ADD_BEHAVIOR:
            return {
                ...state,
                behaviors: [...state.behaviors, action.payload]
            };
        case ShoppingListActions.ADD_BEHAVIORS:
            return {
                ...state,
                behaviors: [...state.behaviors, ...(<Behavior[]>action.payload)]
            };
        case ShoppingListActions.UPDATE_BEHAVIOR:
            const payloadUpdate = <Behavior>action.payload;
            const behavior = state.behaviors[state.editedBehaviorIndex];
            const updatedBehavior = {
                ...behavior,
                ...payloadUpdate
            };
            const behaviors = [...state.behaviors];
            behaviors[state.editedBehaviorIndex] = updatedBehavior;

            return {
                ...state,
                behaviors: behaviors,
                editedBehavior: null,
                editedBehaviorIndex: -1
            };
        case ShoppingListActions.DELETE_BEHAVIOR:
            const oldBehaviors = [...state.behaviors];
            oldBehaviors.splice(state.editedBehaviorIndex, 1);

            return {
                ...state,
                behaviors: oldBehaviors,
                editedBehavior: null,
                editedBehaviorIndex: -1
            };
        case ShoppingListActions.START_EDIT:
            const payloadStartEdit = <number>action.payload;
            const editedBehavior = { ...state.behaviors[payloadStartEdit] };

            return {
                ...state,
                editedBehavior: editedBehavior,
                editedBehaviorIndex: payloadStartEdit
            }
        case ShoppingListActions.STOP_EDIT:
            return {
                ...state,
                editedBehavior: null,
                editedBehaviorIndex: -1
            }
        default:
            return state;
    }
}