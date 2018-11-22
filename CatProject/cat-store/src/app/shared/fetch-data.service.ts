import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { CatService } from "../cat/cat.service";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class FetchDataService {
    constructor(private catService: CatService, private shoppingListService: ShoppingListService, private http: Http) { }

    SaveData() {
        const cats = this.catService.getCats();
        const behaviors = this.shoppingListService.getBehaviors();
        const data = { cats: cats, behaviors: behaviors };

        this.http.put("https://api-project-992217266006.firebaseio.com/catData.json", data).subscribe(
            (response: Response) => { },
            (error) => { }
        );
    }

    FetchData() {
        this.http.get("https://api-project-992217266006.firebaseio.com/catData.json")
            .subscribe(
            (response: Response) => {
                const data = response.json();

                for (let cat in data.cats) {
                    if (!cat['behaviors']) {
                        cat['behaviors'] = [];
                    }
                }

                this.shoppingListService.init(data.behaviors);
                this.catService.init(data.cats);
            },
            (error) => { }
            );
    }
}