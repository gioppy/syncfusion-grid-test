import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from "@syncfusion/ej2-angular-popups";

import { PriorityComponent } from './priority.component';

@NgModule({
  declarations: [
    PriorityComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    PriorityComponent
  ]
})
export class PriorityModule {
}
