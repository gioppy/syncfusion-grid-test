import { FormGroup } from "@angular/forms";

export interface ToolbarAction {
  label: string;
  id: string;
  form?: FormGroup;
  fields?: ToolbarActionOption[];
}

export interface ToolbarActionOption {
  value: string;
  label: string;
  checked: boolean;
}