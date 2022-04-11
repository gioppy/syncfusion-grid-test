import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SettingOption } from "../models/settings";

@Component({
  selector: 'app-priority',
  template: `
    <ejs-tooltip [content]="priority.label">
      <span [ngClass]="classes">
      <span class="priority__icon">
        <svg width="9" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M8 1H1.5V0h-1v9H0v1h2V9h-.5V6.5H8a.5.5 0 0 0 .5-.5V1.5A.5.5 0 0 0 8 1Z" fill="currentColor" fill-rule="nonzero"/></svg>
      </span>
      <span class="priority__label" [ngClass]="{ 'priority__label--slim': slim }">{{ priority.label }}</span>
    </span>
    </ejs-tooltip>
  `,
  styleUrls: ['./priority.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriorityComponent implements OnInit, OnChanges {

  @Input() priority!: SettingOption;
  @Input() slim: boolean = false;

  classes: string[] = ['priority']

  constructor() { }

  ngOnInit(): void {
    this.classes.push(`priority--${this.priority.value}`);

    if (this.slim) {
      this.classes.push('priority--slim');
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['priority'] && !changes['priority'].firstChange) {
      this.classes.pop();
      this.classes.push(`priority--${changes['priority'].currentValue.value}`);
    }
  }

}
