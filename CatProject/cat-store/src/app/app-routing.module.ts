import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { CatDetailComponent } from './cat/cat-detail/cat-detail.component';
import { CatEditComponent } from './cat/cat-edit/cat-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CatStartComponent } from './cat/cat-start/cat-start.component';
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: '', redirectTo: '/cats', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}