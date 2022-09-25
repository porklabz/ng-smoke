import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  NgModule,
  OnDestroy,
  Output,
  QueryList,
  TemplateRef,
  ViewEncapsulation
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule, SmkTemplate} from "../util/shared";

@Directive({
  selector: '[smkButton]'
})
export class SmkButtonDirective {
  label: string;
  icon: string;
  loading: boolean = false;
  loadingIcon: string = 'pi pi-spinner pi-spin';
}

@Component({
  selector: 'smk-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SmkButtonComponent implements AfterViewInit, OnDestroy {
  @Input() type: string = 'button';
  @Input() iconPos: string = 'left';
  @Input() icon: string;
  @Input() badge: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() loading: boolean = false;
  @Input() loadingIcon: string = 'pi pi-spinner pi-spin';
  @Input() style: any;
  @Input() styleClass: string;
  @Input() badgeClass: string;
  @Input() ariaLabel: string;

  contentTemplate: TemplateRef<any>;

  @ContentChildren(SmkTemplate) templates: QueryList<any>;

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  @Output() onFocus: EventEmitter<any> = new EventEmitter();
  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  constructor(public el: ElementRef) {
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
  }
}

@NgModule({
  imports: [CommonModule],
  exports: [SmkButtonComponent, SmkButtonDirective, SharedModule],
  declarations: [SmkButtonComponent, SmkButtonDirective]
})
export class SmkButtonModule {
}
