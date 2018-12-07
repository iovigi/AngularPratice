import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { map, switchMap, mergeMap, tap } from 'rxjs/operators';
import { from } from 'rxjs';
import * as firebase from 'firebase';

import * as AuthActions from './auth.actions';


@Injectable()
export class AuthEffects {
    @Effect()
    authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP)
        .pipe(map(
            (action: any) => {
                return action.payload;
            }
        )).pipe(switchMap((authData: { username: string, password: string }) => {
            return from(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
        }))
        .pipe(switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }))
        .pipe(mergeMap((token) => {
            this.router.navigate(['/']);

            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                },
            ]
        }));

    @Effect()
    authSignin = this.actions$.ofType(AuthActions.TRY_SIGNIN)
        .pipe(map(
            (action: any) => {
                return action.payload;
            }
        )).pipe(switchMap((authData: { username: string, password: string }) => {
            return from(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
        }))
        .pipe(switchMap(() => {
            return from(firebase.auth().currentUser.getIdToken());
        }))
        .pipe(mergeMap((token) => {
            this.router.navigate(['/']);

            return [
                {
                    type: AuthActions.SIGNUP
                },
                {
                    type: AuthActions.SET_TOKEN,
                    payload: token
                },
            ]
        }));

    @Effect({ dispatch: false })
    authLogout = this.actions$.ofType(AuthActions.LOGOUT)
        .pipe(tap(() => {
            firebase.auth().signOut();
            
            this.router.navigate(['/']);
        }));


    constructor(private actions$: Actions, private router: Router) {
    }
}