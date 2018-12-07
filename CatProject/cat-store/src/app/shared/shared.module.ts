import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DropdowDicrective } from "./dropdown.directive";

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