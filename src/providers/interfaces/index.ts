import { EAccordionOpenStrategy, EIcons, EPages } from "../enums";

export interface ITab {
  id: number;
  value: string;
  link: string;
}

export interface INavbarLowItem {
  id: number;
  icon: EIcons;
  iconActive: EIcons;
  path: EPages;
  templateName?: EIcons;
}

export interface IStore {
  sidebar: boolean;
  accordion: IAccordionState;
}

export interface IAccordionItem {
  id: number;
  title :string;
}

export interface IAccordionState {
  openedItems: number[];
  openStrategy: EAccordionOpenStrategy;
}

export interface IListItem {
  id: number;
  text: string;
  icon: EIcons;
}
