import {NgModule} from '@angular/core';
import {ContainerComponent} from './container/container/container.component';
import {CommonModule} from "@angular/common";
import {SharedModule} from "./util/shared";

@NgModule({
  declarations: [
    ContainerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ContainerComponent,
  ]
})
export class NgSmokeModule {
}
