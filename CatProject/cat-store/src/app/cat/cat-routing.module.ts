import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CatComponent } from "./cat.component";
import { CatStartComponent } from "./cat-start/cat-start.component";
import { CatEditComponent } from "./cat-edit/cat-edit.component";
import { CatDetailComponent } from "./cat-detail/cat-detail.component";
import { AuthGuardService } from "../auth/auth-guard.service";

const catRoutes: Routes = [
    {
        path: 'cats', component: CatComponent, children: [
            { path: '', component: CatStartComponent },
            { path: 'new', component: CatEditComponent, canActivate: [AuthGuardService] },
            { path: ':id', component: CatDetailComponent },
            { path: ':id/edit', component: CatEditComponent, canActivate: [AuthGuardService] }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(catRoutes)
    ],
    exports: [RouterModule]
})
export class CatRoutingModule {

}