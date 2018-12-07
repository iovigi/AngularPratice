import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { CatComponent } from './cat.component';
import { CatStartComponent } from './cat-start/cat-start.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatDetailComponent } from './cat-detail/cat-detail.component';
import { CatItemComponent } from './cat-list/cat-item/cat-item.component';
import { CatRoutingModule } from './cat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { catReducer } from './store/cat.reducers';

@NgModule({
    declarations: [
        CatComponent,
        CatStartComponent,
        CatEditComponent,
        CatDetailComponent,
        CatListComponent,
        CatDetailComponent,
        CatItemComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CatRoutingModule,
        SharedModule,
        StoreModule.forFeature('cats', catReducer)
    ]
})
export class CatModule {

}