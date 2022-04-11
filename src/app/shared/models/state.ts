import { DashboardItems } from "./dashboard";
import { Settings } from "./settings";
import { ProjectItem, ProjectTeaserItems } from "./project";
import { SubMenuItem } from "./submenu";

export interface AppState {
  settings: Settings;
  submenu: SubMenuItem[];
  dashboard: DashboardItems;
  projects: ProjectTeaserItems;
  project: ProjectItem;
}
