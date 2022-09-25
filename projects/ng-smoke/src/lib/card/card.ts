import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SharedModule, SmkTemplate} from '../util/shared';
import {CommonModule} from "@angular/common";
import {SmkProgressModule} from "../progress/progress";

@Component({
  selector: 'smk-card',
  template: `
    <div [ngClass]="computedClass" [ngStyle]="style" [class]="styleClass" *ngIf="visible">
      <div *ngIf="closable" class="smk-absolute smk-right-0 smk-top-0" (click)="close()">X</div>

      <div *ngIf="loading" class="smk-card-progress">
        <smk-progress [color]="color" styleClass="smk-absolute" class="smk-h-1"></smk-progress>
      </div>

      <div *ngIf="headerTpl" class="smk-card-header" #headerTplContainer>
        <ng-container [ngTemplateOutlet]="headerTpl.template"></ng-container>
      </div>
      <div #headerTplContainer class="smk-card-header smk-font-bold smk-text-lg"
           [ngClass]="'smk-p-' + padding + (header ? ' smk-border-b' : '')"
           *ngIf="!headerTpl && header">
        <div *ngIf="header" [innerHTML]="header"></div>
      </div>
      <div [ngClass]="'smk-p-' + padding">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SmkCardComponent implements AfterViewInit {
  @Input() style: any;
  @Input() styleClass: string;
  /**
   * Min 0, Máx 24
   */
  @Input() elevation: number = 0; // min 0, max 24
  @Input() rounded: boolean = true;
  @Input() outlined: boolean = false;
  @Input() shaped: boolean = false;
  @Input() hoverable: boolean = false;
  @Input() closable: boolean = false;
  @Input() visible: boolean = true;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() padding: number = 3;
  @Input() hoverStep: number = 4;
  @Input() header: string;
  @Input() color: string = 'smk-bg-indigo-600';
  @ViewChild('headerTplContainer') headerTplContainer: ElementRef;
  @ContentChild(SmkTemplate, {read: SmkTemplate}) headerTpl: SmkTemplate;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.headerTpl) {
      if (this.rounded) {
        this.headerTplContainer.nativeElement.childNodes[0].className += ' smk-parent-border-top';
      }
    }
  }

  close(): void {
    this.visible = false;
  }

  get computedClass(): string {
    let computed: string[] = [
      'smk-card',
      'smk-duration-400',
      'smk-shadow-' + this.elevation
    ];
    if (this.rounded) {
      computed.push('smk-rounded');
    }
    if (this.shaped) {
      computed.push('smk-rounded-tl-xl smk-rounded-tr-none smk-rounded-bl-none smk-rounded-br-xl');
    }
    if (this.outlined) {
      computed.push('smk-border');
    }
    if (this.disabled) {
      computed.push('smk-disabled');
    }
    if (this.hoverable) {
      let hoverElevation = this.elevation + this.hoverStep;
      if (hoverElevation > 24) {
        hoverElevation = 24;
      }
      if (hoverElevation < 0) {
        hoverElevation = 0;
      }
      computed.push('hover:smk-shadow-' + hoverElevation);
    }
    return computed.join(' ');
  }
}

@NgModule({
  imports: [CommonModule, SmkProgressModule],
  exports: [SmkCardComponent, SharedModule, SmkProgressModule],
  declarations: [SmkCardComponent]
})
export class SmkCardModule {
}
