import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "src/app/shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { CatService } from '../cat/cat.service'
import { FetchDataService } from '../shared/fetch-data.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "../shared/auth.interceptor";
import { LoggingInterceptor } from "../shared/logging.interceptor";


@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [
        CatService,
        FetchDataService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi:true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoggingInterceptor,
            multi:true
        }]
})
export class CoreModule {

}