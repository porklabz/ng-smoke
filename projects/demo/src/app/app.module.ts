import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {NgSmokeModule} from "../../../ng-smoke/src/lib/ng-smoke.module";
import {SmkCardModule} from "../../../ng-smoke/src/lib/card/card";
import {SmkButtonModule} from "../../../ng-smoke/src/lib/button/button";

import {CardComponent} from './card/card.component';
import {ButtonComponent} from './button/button.component';
import {SmkProgressModule} from "../../../ng-smoke/src/lib/progress/progress";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSmokeModule,
    SmkCardModule,
    SmkButtonModule,
    SmkProgressModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
