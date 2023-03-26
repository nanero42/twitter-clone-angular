import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';
import { SettingsBarItemCenterComponent } from './settings-bar/components/settings-bar-item-center/settings-bar-item-center.component';
import { SettingsBarItemRightComponent } from './settings-bar/components/settings-bar-item-right/settings-bar-item-right.component';
import { SettingsBarItemLeftComponent } from './settings-bar/components/settings-bar-item-left/settings-bar-item-left.component';
import { TabsComponent } from './tabs/tabs.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion/components/accordion-item/accordion-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { ListComponent } from './list/list.component';
import { AccountInfoComponent } from './account-info/account-info.component';

const exportedMolecules = [
  SettingsBarComponent,
  TabsComponent,
  NavbarComponent,
  SidebarComponent,
  AccordionComponent,
  ListComponent,
  AccountInfoComponent,
];

const molecules = [
  SettingsBarItemCenterComponent,
  SettingsBarItemRightComponent,
  SettingsBarItemLeftComponent,
  AccordionItemComponent,
  NavbarItemComponent,
];

@NgModule({
  declarations: [
    ...exportedMolecules,
    ...molecules,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    AppRoutingModule,
  ],
  exports: [
    ...exportedMolecules,
  ],
})
export class MoleculesModule { }
