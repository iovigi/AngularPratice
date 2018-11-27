import { Injectable } from "@angular/core";
import { CatService } from "../cat/cat.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { AuthService } from "../auth/auth.service";
import { HttpClient } from "@angular/common/http";
import { Cat } from "src/app/cat/cat.model";
import { Behavior } from "src/app/shared/behavior.model";
import { HttpEvent, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";

@Injectable()
export class FetchDataService {
    constructor(private catService: CatService, private shoppingListService: ShoppingListService, private httpClient: HttpClient, private authService: AuthService) { }

    SaveData() {
        const cats = this.catService.getCats();
        const behaviors = this.shoppingListService.getBehaviors();
        const data = { cats: cats, behaviors: behaviors };

        var token = this.authService.getToken();

        /*this.httpClient.put("https://api-project-992217266006.firebaseio.com/catData.json", data, {
            observe: 'body',
            headers: new HttpHeaders().set("Kiro", "1234"),
            params: new HttpParams().set("auth", token)
        }).subscribe(
            (response: HttpEvent<any>) => {
                console.log(response);
            },
            (error) => { }
        );*/

        const req = new HttpRequest("PUT", "https://api-project-992217266006.firebaseio.com/catData.json", data, {
            reportProgress: true
        });

        this.httpClient.request(req).subscribe(
            (response: HttpEvent<any>) => {
                console.log(response);
            },
            (error) => { }
        );
    }

    FetchData() {
        var token = this.authService.getToken();

        this.httpClient.get<{ cats: Cat[], behaviors: Behavior[] }>("https://api-project-992217266006.firebaseio.com/catData.json")
            .subscribe(
            (data) => {
                if(data == null){
                    return;
                }

                for (let cat of data.cats) {
                    if (!cat.behaviors) {
                        cat.behaviors = [];
                    }
                }

                if (data.behaviors) {
                    this.shoppingListService.init(data.behaviors);
                }
                this.catService.init(data.cats);
            },
            (error) => {
                console.log(error);
            }
            );

        /*this.httpClient.get("https://api-project-992217266006.firebaseio.com/catData.json?auth=" + token,{
           observe:'response',
           responseType:'json'
        }).subscribe((response)=>{
            console.log(response);
        });*/
    }
}