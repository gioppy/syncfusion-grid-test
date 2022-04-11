import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Table, TableAction } from "../models/table";
import { ProjectTeaser } from "../models/project";
import {
  ContextMenuItemModel,
  FilterSettingsModel,
  GridComponent,
  PageSettingsModel, RecordClickEventArgs, RowSelectingEventArgs
} from "@syncfusion/ej2-angular-grids";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() table!: Table;
  @Output() action: EventEmitter<TableAction> = new EventEmitter<TableAction>();

  @ViewChild('grid') grid!: GridComponent;

  constructor() { }

  ngOnInit(): void {
  }

  handleFavorite(data: ProjectTeaser) {
    this.action.emit({ type: 'favorite', from: 'favorite', data: data });
  }

  handleContextMenu(args: any): void {
    this.action.emit({ type: args.item.text, from: 'context', data: args.rowInfo.rowData });
  }

  handleRowClick(e: RecordClickEventArgs): void {
    if (e.column?.field !== 'operations' && e.column?.field !== 'favorite') {
      this.action.emit({ type: 'row', from: 'row', data: e.rowData });
    }
  }

  openContextMenu(): void {
    (<any>this.grid.contextMenuModule).element.ej2_instances[0].openMenu(null, null, (<any>event).pageY, (<any>event).pageX, event)
  }

  get allowFiltering(): boolean {
    return this.table.settings.hasOwnProperty('filters');
  }

  get filterSettings(): FilterSettingsModel {
    return this.table.settings.filters ?? {};
  }

  get allowGrouping(): boolean {
    return this.table.settings.grouping;
  }

  get allowPaging(): boolean {
    return this.table.settings.hasOwnProperty('page');
  }

  get pageSettings(): PageSettingsModel {
    return this.table.settings.page ?? {};
  }

  get contextMenuItems(): ContextMenuItemModel[] {
    return this.table.settings.context_menu ?? [];
  }

}
