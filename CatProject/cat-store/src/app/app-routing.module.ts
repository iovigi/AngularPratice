import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { CatDetailComponent } from './cat/cat-detail/cat-detail.component';
import { CatEditComponent } from './cat/cat-edit/cat-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CatStartComponent } from './cat/cat-start/cat-start.component';

const appRoutes: Routes = [
    { path: 'cats', component: CatComponent, children: [
        { path: '', component: CatStartComponent},
        { path: 'new', component: CatEditComponent},
        { path: ':id', component: CatDetailComponent},
        { path: ':id/edit', component: CatEditComponent}
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: '', redirectTo: '/cats', pathMatch:'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}