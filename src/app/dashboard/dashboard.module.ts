import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from "./dashboard-routing.module";

import { UserBadgeModule } from "../shared/user-badge/user-badge.module";

import { DashboardService } from "./dashboard.service";

import { DashboardComponent } from './dashboard.component';
import { TableModule } from "../shared/table/table.module";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    UserBadgeModule,
    TableModule
  ],
  providers: [
    DashboardService
  ]
})
export class DashboardModule {
}
