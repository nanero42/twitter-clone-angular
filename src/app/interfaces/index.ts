import { EIcons } from "../enums";

export interface ITab {
  id: number;
  value: string;
}

export interface INavbarLowItem {
  id: number;
  icon: EIcons;
  iconActive: EIcons;
  templateName?: EIcons;
}
