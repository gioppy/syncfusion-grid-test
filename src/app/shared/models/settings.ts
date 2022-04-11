export interface Settings {
  status: SettingOption[];
  priority: SettingOption[];
  risk: SettingOption[];
}

export interface SettingOption {
  value: number;
  label: string;
}