import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
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
import { AppRoutingModule } from './app-routing.module';
import { CatStartComponent } from './cat/cat-start/cat-start.component';
import { CatEditComponent } from './cat/cat-edit/cat-edit.component';
import { CatService } from './cat/cat.service'




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
    DropdowDicrective,
    CatStartComponent,
    CatEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService,
    CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
