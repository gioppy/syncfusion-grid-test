import { CardSettingsModel, ColumnsModel, SwimlaneSettingsModel } from "@syncfusion/ej2-angular-kanban";
import { ToolbarAction } from "./toolbar-actions";

export interface BoardResponse {
  id: string;
  tasks: BoardTask[];
}

export interface Board {
  items: BoardTask[];
  settings: BoardSettings;
}

export interface BoardTask {
  id: number;
  activityType: number;
  activityState: string;
  title: string;
  description: string;
  priority: number;
  assignee: string[];
}

export interface BoardSettings {
  columns: ColumnsModel[];
  keyField: string;
  cardSettings: CardSettingsModel;
  toolbar?: ToolbarAction[];
  swimlaneSettings?: SwimlaneSettingsModel;
}