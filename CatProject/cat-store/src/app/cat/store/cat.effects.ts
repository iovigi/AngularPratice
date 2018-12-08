import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { map, switchMap, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { from } from 'rxjs';
import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Store } from "@ngrx/store";

import * as fromCat from './cat.reducers';
import * as CatActions from './cat.actions';
import { Cat } from "../cat.model";
import { Behavior } from "../../shared/behavior.model";


@Injectable()
export class CatEffects {
    @Effect()
    catFetch = this.action$
        .ofType(CatActions.FETCH_CATS)
        .pipe(switchMap(action => {
            return this.httpClient.get<{ cats: Cat[], behaviors: Behavior[] }>("https://api-project-992217266006.firebaseio.com/catData.json");
        }))
        .pipe(map((data) => {
            for (let cat of data.cats) {
                if (!cat.behaviors) {
                    cat.behaviors = [];
                }
            }

            return {
                type: CatActions.SET_CATS,
                payload: data.cats
            };
        }));

    @Effect({ dispatch: false })
    catStore = this.action$
        .ofType(CatActions.STORE_CATS)
        .pipe(withLatestFrom(this.store.select('cats')))
        .pipe(
        switchMap(([action, state]) => {
            const req = new HttpRequest("PUT", "https://api-project-992217266006.firebaseio.com/catData.json", { cats: state.cats }, {
                reportProgress: true
            });

            return this.httpClient.request(req);
        }));

    constructor(private action$: Actions, private httpClient: HttpClient, private store: Store<fromCat.FeatureState>) {
    }
}