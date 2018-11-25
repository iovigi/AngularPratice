import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdowDicrective } from "./dropdown.directive";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
    declarations: [
        DropdowDicrective
    ],
    exports: [
        CommonModule,
        DropdowDicrective
    ]
})
export class SharedModule { }