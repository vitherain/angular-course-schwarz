import { NgModule } from "@angular/core";
import { AppModule } from "app/app.module";
import { ServerModule } from "@angular/platform-server";
import { AppComponent } from "app/app.component";


@NgModule({
    imports: [
        AppModule,
        ServerModule
    ],
    bootstrap: [AppComponent]
})
export class AppServerModule {

}