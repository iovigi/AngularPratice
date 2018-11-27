import {
    HttpInterceptor,
    HttpHandler,
    HttpHeaderResponse,
    HttpRequest,
    HttpSentEvent,
    HttpProgressEvent,
    HttpResponse,
    HttpUserEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        return next.handle(req).pipe(tap(event => {
            console.log('Log ', event);
        }
        ));
    }
}