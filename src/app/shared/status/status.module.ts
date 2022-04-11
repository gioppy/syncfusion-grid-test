import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipModule } from "@syncfusion/ej2-angular-popups";

import { StatusComponent } from './status.component';

@NgModule({
  declarations: [
    StatusComponent
  ],
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [
    StatusComponent
  ]
})
export class StatusModule {
}
