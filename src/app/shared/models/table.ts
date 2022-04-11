import {
  ContextMenuItemModel,
  FilterSettingsModel,
  PageSettingsModel,
  ToolbarItems
} from "@syncfusion/ej2-angular-grids";

export interface Table {
  rows: TableRow[];
  settings: TableSettings;
}

export interface TableRow {
  [key: string]: any;
}

export interface TableRowOptions {
  name: string;
  label: string;
  component: string;
  allow_sorting: boolean;
  allow_filtering: boolean;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}

export interface TableSettings {
  columns: TableRowOptions[];
  sorting: boolean;
  grouping: boolean;
  context_menu?: ContextMenuItemModel[];
  filters?: FilterSettingsModel;
  toolbar?: ToolbarItems[];
  page?: PageSettingsModel;
}

export interface TableAction {
  type: string;
  from: string;
  data: any;
}