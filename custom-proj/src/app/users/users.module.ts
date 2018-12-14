import { NgModule } from "@angular/core";
import { UserComponent } from "./users.component";
import { CommonModule } from "@angular/common/";
import { UsersRoutingModule } from "./users-routing.module";


@NgModule({
    declarations: [UserComponent],
    imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {

}