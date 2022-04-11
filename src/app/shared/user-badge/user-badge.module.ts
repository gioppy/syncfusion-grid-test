import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from "@syncfusion/ej2-angular-popups";

import { UserBadgeComponent } from './user-badge.component';

@NgModule({
  declarations: [
    UserBadgeComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    UserBadgeComponent
  ]
})
export class UserBadgeModule {
}
