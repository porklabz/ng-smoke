import {Directive, Input, NgModule, TemplateRef} from '@angular/core';
import {CommonModule} from "@angular/common";

@Directive({
  selector: '[tpl]',
})
export class SmkTemplate {
  @Input() type: string;
  @Input('tpl') name: string;

  constructor(public template: TemplateRef<any>) {
  }

  getType(): string {
    return this.name;
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [SmkTemplate],
  declarations: [SmkTemplate]
})
export class SharedModule {
}
