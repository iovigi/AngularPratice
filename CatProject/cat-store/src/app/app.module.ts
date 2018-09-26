import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CatListComponent } from './cat/cat-list/cat-list.component';
import { CatItemComponent } from './cat/cat-list/cat-item/cat-item.component';
import { CatDetailComponent } from './cat/cat-detail/cat-detail.component';
import { CatComponent } from './cat/cat.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderComponent } from './header/header.component';
import { DropdowDicrective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';


@NgModule({
  declarations: [
    AppComponent,
    CatListComponent,
    CatItemComponent,
    CatDetailComponent,
    CatComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    DropdowDicrective
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
