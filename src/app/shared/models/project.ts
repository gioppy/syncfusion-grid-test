import { Table } from "./table";
import { Gantt } from "./gantt";
import { Wbs } from "./wbs";
import { Board } from "./board";

export interface ProjectTeaser {
  favorite: boolean;
  id: string;
  name: string;
  category: string;
  project_manager: string;
  type: string;
  status: string;
  phase: string;
  start_date: string;
  end_date: string;
}

export interface ProjectTeaserItems {
  items: Table;
}

export interface ProjectItem {
  item: Project;
}

export interface ProjectHeaderResponse {
  section: string;
  id: string;
  name: string;
}

export interface Project extends ProjectHeaderResponse{
  gantt: Gantt;
  wbs: Wbs;
  board: Board;
}