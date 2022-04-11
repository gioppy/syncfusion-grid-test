import { SettingOption } from "./settings";
import { TableRowOptions } from "./table";
import { FilterSettingsModel, SplitterSettingsModel, TaskFieldsModel } from "@syncfusion/ej2-angular-gantt";
import { ToolbarAction } from "./toolbar-actions";

export interface GanttResponse {
  id: string;
  tasks: GanttTask[];
}

export interface Gantt {
  items: GanttTask[] | GanttTaskItem[],
  settings: GanttSettings;
}

export interface GanttSettings {
  columns: TableRowOptions[];
  treeColumIndex: number;
  taskSettings?: TaskFieldsModel;
  filters?: FilterSettingsModel;
  splitterSettings?: SplitterSettingsModel;
  toolbar?: ToolbarAction[];
}

export interface GanttTask {
  id: number;
  projectId: number;
  parentActivityId: number | null;
  activityType: number;
  activityState: number;
  title: string;
  description: string;
  priority: number;
  plannedHours: number;
  plannedCost: number;
  plannedStartDate: string;
  plannedEndDate: string;
  note: string;
  previousActivityIds: number | number[] | null;
  subactivities: GanttTask[] | null;
}

export interface GanttTaskItem extends Omit<GanttTask, 'activityState' | 'priority' | 'subactivities'> {
  activityState: SettingOption;
  priority: SettingOption;
  subactivities: GanttTaskItem[] | null
}
