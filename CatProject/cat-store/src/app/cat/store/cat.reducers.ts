import { Cat } from "../cat.model";
import { Behavior } from '../../shared/behavior.model';

import * as CatActions from './cat.actions';

export interface FeatureState {
    cats: State
}

export interface State {
    cats: Cat[]
}

const initialState: State = {
    cats: [new Cat("test", "test", "test", [new Behavior("123", 12)])]
};

export function catReducer(state = initialState, action: any) {
    switch (action.type) {
        case CatActions.SET_CATS:
            {
                return {
                    ...state,
                    cats: [...action.payload]
                }
            }
        case CatActions.ADD_CAT:
            {
                return {
                    ...state,
                    cats: [...state.cats, action.payload]
                }
            }
        case CatActions.UPDATE_CAT:
            {
                const cat = state.cats[action.payload.index];
                const updatedCat = {
                    ...cat,
                    ...action.payload.cat
                };

                const cats = [...state.cats];
                cats[action.payload.index] = updatedCat;

                return {
                    ...state,
                    cats: cats
                }
            }
        case CatActions.DELETE_CAT:
            {
                const cats = [...state.cats];
                cats.splice(action.payload, 1);

                return {
                    ...state,
                    cats: cats
                }
            }
        default:
            return state;
    }
}