import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'cats', loadChildren: './cat/cat.module#CatModule' },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule {
}