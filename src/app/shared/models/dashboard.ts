import { SettingOption } from "./settings";
import { Table } from "./table";

export interface DashboardItems {
  items: Dashboard;
}

export interface DashboardRequest {
  cards: DashboardCard[];
  tasks: DashboardTask[];
  projects: DashboardProject[];
}

export interface Dashboard {
  cards: DashboardCard[];
  tasks: Table;
  projects: DashboardProject[];
}

export interface DashboardCard {
  value: number | string;
  label: string;
}

export interface DashboardTask {
  name: string;
  status: number;
  users: any;
  ends_at: string;
  priority: number;
}

export interface DashboardTaskWithData {
  name: string;
  status: SettingOption;
  users: any;
  ends_at: string;
  priority: SettingOption;
}

export interface DashboardProject {
  id: number;
  name: string;
  project_manager: string;
  start_date: string;
  end_date: string;
  percentage: number;
  active_tasks: number;
  active_issues: number;
}