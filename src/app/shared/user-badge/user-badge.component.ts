import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-badge',
  template: `
    <ejs-tooltip [content]="name">
      <div class="user-badge">
        <span class="user-badge__initial">{{ first }}{{ last }}</span>
        <div class="user-badge__info">
          <span class="user-badge__name" *ngIf="!onlyInitial">{{ name }}</span>
          <span class="user-badge__description" *ngIf="description">{{ description }}</span>
        </div>
      </div>
    </ejs-tooltip>
  `,
  styleUrls: ['./user-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserBadgeComponent implements OnInit {

  @Input() name!: string
  @Input() description: string = '';
  @Input() onlyInitial: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get first(): string {
    return this.name.split(' ')[0].charAt(0);
  }

  get last(): string {
    return this.name.split(' ')[1].charAt(0);
  }

}
