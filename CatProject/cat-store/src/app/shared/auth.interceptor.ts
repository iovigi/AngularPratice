import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpRequest, HttpProgressEvent, HttpResponse, HttpUserEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        console.log('test', req);

        const cloneReq = req.clone({
            headers: req.headers.append("test", "test"),
            params: req.params.set("auth", this.authService.getToken())
        });


        return next.handle(cloneReq);
    }
}