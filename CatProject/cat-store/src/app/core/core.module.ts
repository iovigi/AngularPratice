import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { CatService } from '../cat/cat.service'
import { FetchDataService } from '../shared/fetch-data.service';
import { AuthService } from '../auth/auth.service';
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],
    providers:[
        ShoppingListService,
        CatService,
        FetchDataService,
        AuthService]
})
export class CoreModule{

}