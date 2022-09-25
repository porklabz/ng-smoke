import {ChangeDetectionStrategy, Component, Input, NgModule, ViewEncapsulation} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../util/shared";

@Component({
  selector: 'smk-progress',
  template: `
    <div class="smk-progress" [ngStyle]="style" [class]="styleClass">
      <div class="smk-progress-base" [ngClass]="color"></div>
      <div class="smk-progress-buffer"></div>
      <div class="smk-progress-animator">
        <div class="smk-progress-animator-short" [ngClass]="color"></div>
        <div class="smk-progress-animator-long" [ngClass]="color"></div>
      </div>
    </div>
  `,
  host: {
     class: 'smk-parent-border-top'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SmkProgressComponent {
  @Input() style: any;
  @Input() styleClass: string;
  @Input() color: string = 'smk-bg-indigo-600';
  @Input() percent: number = 100;
}

@NgModule({
  imports: [CommonModule],
  exports: [SmkProgressComponent, SharedModule],
  declarations: [SmkProgressComponent]
})
export class SmkProgressModule {
}
