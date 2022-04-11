import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ContextMenuService,
  FilterService,
  GridModule,
  GroupService, PageService, SearchService,
  SortService, ToolbarService
} from "@syncfusion/ej2-angular-grids";

import { TagModule } from "../tag/tag.module";
import { FavoriteModule } from "../favorite/favorite.module";
import { UserBadgeModule } from "../user-badge/user-badge.module";
import { StatusModule } from "../status/status.module";
import { PriorityModule } from "../priority/priority.module";

import { TableComponent } from './table.component';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    GridModule,
    TagModule,
    FavoriteModule,
    UserBadgeModule,
    StatusModule,
    PriorityModule
  ],
  exports: [
    TableComponent
  ],
  providers: [
    ContextMenuService,
    SortService,
    FilterService,
    GroupService,
    SearchService,
    ToolbarService,
    PageService
  ]
})
export class TableModule {
}
