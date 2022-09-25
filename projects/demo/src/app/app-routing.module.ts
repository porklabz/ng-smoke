import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CardComponent} from "./card/card.component";
import {ButtonComponent} from "./button/button.component";

const routes: Routes = [
  {path: 'cards', component: CardComponent},
  {path: 'buttons', component: ButtonComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
