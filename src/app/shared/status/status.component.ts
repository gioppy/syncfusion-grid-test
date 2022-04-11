import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SettingOption } from "../models/settings";

@Component({
  selector: 'app-status',
  template: `
    <ejs-tooltip [content]="status.label"><span [ngClass]="classes"></span></ejs-tooltip>
  `,
  styleUrls: ['./status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusComponent implements OnInit, OnChanges {

  @Input() status!: SettingOption;

  classes: string[] = ['status'];

  constructor() { }

  ngOnInit(): void {
    this.classes.push(`status--${this.status.value}`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['status'] && !changes['status'].firstChange) {
      this.classes.pop();
      this.classes.push(`status--${changes['status'].currentValue.value}`);
    }
  }

}
