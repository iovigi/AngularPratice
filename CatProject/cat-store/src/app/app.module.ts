import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat/cat-list/cat-list.component';
import { CatItemComponent } from './cat/cat-list/cat-item/cat-item.component';
import { CatDetailComponent } from './cat/cat-detail/cat-detail.component';
import { CatComponent } from './cat/cat.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatItemComponent,
    CatDetailComponent,
    CatComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
