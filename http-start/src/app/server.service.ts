import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ServerSevice {
    constructor(private http: Http) { }

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-Type': 'application/json' });

        /*return this.http.post('https://api-project-670500630135.firebaseio.com/data.json',
            servers, { headers: headers });*/

        return this.http.put('https://api-project-670500630135.firebaseio.com/data.json',
            servers, { headers: headers });
    }

    getServers() {
        return this.http.get('https://api-project-670500630135.firebaseio.com/data.json').map(
            (response: Response) => {
                const data = response.json();

                return data;
            }).catch(
            (error: Response) => {
                console.log(error);

                return Observable.throw(error);
            }
            );
    }

    getAppName() {
        return this.http.get('https://api-project-670500630135.firebaseio.com/appName.json')
            .map((response: Response) => {
                return response.json();
            });
    }
}