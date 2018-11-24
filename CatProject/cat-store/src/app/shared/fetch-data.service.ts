import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { CatService } from "../cat/cat.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class FetchDataService {
    constructor(private catService: CatService, private shoppingListService: ShoppingListService, private http: Http, private authService: AuthService) { }

    SaveData() {
        const cats = this.catService.getCats();
        const behaviors = this.shoppingListService.getBehaviors();
        const data = { cats: cats, behaviors: behaviors };

        var token = this.authService.getToken();

        this.http.put("https://api-project-992217266006.firebaseio.com/catData.json?auth="+token, data).subscribe(
            (response: Response) => { },
            (error) => { }
        );
    }

    FetchData() {
        var token = this.authService.getToken();

        this.http.get("https://api-project-992217266006.firebaseio.com/catData.json?auth="+token)
            .subscribe(
            (response: Response) => {
                const data = response.json();
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
    }
}