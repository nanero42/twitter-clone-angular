import { EIcons, EPages } from "../enums";

export interface ITab {
  id: number;
  value: string;
}

export interface INavbarLowItem {
  id: number;
  icon: EIcons;
  iconActive: EIcons;
  path: EPages;
  templateName?: EIcons;
}
