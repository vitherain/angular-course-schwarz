import { NgModule } from "@angular/core";
import { UsersRoutingModule } from "./users-routing.module";
import { CommonModule } from "@angular/common";

import { UsersComponent } from "./users.component";

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {

}