import { Action } from '@ngrx/store';
import { Cat } from '../cat.model';

export const SET_CATS = "SET_CATS";
export const ADD_CAT = "ADD_CAT";
export const UPDATE_CAT = "UPDATE_CAT";
export const DELETE_CAT = "DELETE_CAT";

export class SetCats implements Action {
    readonly type = SET_CATS;

    constructor(public payload: Cat[]) { }
}

export class AddCat implements Action {
    readonly type = ADD_CAT;

    constructor(public payload: Cat) { }
}

export class UpdateCat implements Action {
    readonly type = UPDATE_CAT;

    constructor(public payload: { index: number, cat: Cat }) { }
}

export class DeleteCat implements Action {
    readonly type = DELETE_CAT;

    constructor(public payload: number) { }
}

export type CatActions = SetCats | AddCat | UpdateCat | DeleteCat;