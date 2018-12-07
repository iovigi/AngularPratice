import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpRequest, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core";

import * as fromApp from '../store/app.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import { switchMap, take } from "rxjs/operators";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private store: Store<fromApp.AppState>) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        return this.store.select('auth')
        .pipe(take(1))
        .pipe(switchMap((state) => {
            const cloneReq = req.clone({
                headers: req.headers.append("test", "test"),
                params: req.params.set("auth", state.token)
            });

            return next.handle(cloneReq);
        }));
    }
}