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
import {SharedModule, SmkTemplate} from '../../util/shared';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'smk-card',
  template: `
    <div [ngClass]="computedClass" [ngStyle]="style" [class]="styleClass" *ngIf="visible">
      <div *ngIf="closable" class="smk-absolute smk-right-0 smk-top-0" (click)="close()">X</div>
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
export class CardComponent implements AfterViewInit {
  @Input() style: any;
  @Input() styleClass: string;
  /**
   * Min 0, Máx 24
   */
  @Input() elevation: number = 0; // min 0, max 24
  @Input() rounded: boolean = true;
  @Input() outlined: boolean = false;
  @Input() hoverable: boolean = false;
  @Input() closable: boolean = false;
  @Input() visible: boolean = true;
  @Input() padding: number = 3;
  @Input() hoverStep: number = 4;
  @Input() header: string;
  @ViewChild('headerTplContainer') headerTplContainer: ElementRef;
  @ContentChild(SmkTemplate, {read: SmkTemplate}) headerTpl: SmkTemplate;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit(): void {
    if (this.headerTpl) {
      if (this.rounded) {
        this.headerTplContainer.nativeElement.childNodes[0].className += ' smk-rounded-t';
      }
    }
  }

  close(): void {
    console.log('close');
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
    if (this.outlined) {
      computed.push('smk-border');
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
  imports: [CommonModule],
  exports: [CardComponent, SharedModule],
  declarations: [CardComponent]
})
export class CardModule {
}
