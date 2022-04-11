import { TableRowOptions } from "./table";
import { ToolbarAction } from "./toolbar-actions";

export interface WbsResponse {
  id: string;
  tasks: WbsTask[];
}

export interface Wbs {
  items: WbsTask[];
  settings: WbsSettings;
}

export interface WbsTask {
  id: number;
  activityType: number;
  activityState: number;
  title: string;
  priority: number;
  plannedHours: number;
  plannedCost: number;
  plannedStartDate: string;
  plannedEndDate: string;
  subactivities?: WbsTask[];
}

export interface WbsSettings {
  columns: TableRowOptions[];
  childMapping: string;
  toolbar?: ToolbarAction[]
}