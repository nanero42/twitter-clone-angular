import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SettingsBarItemCenterComponent } from './settings-bar/components/settings-bar-item-center/settings-bar-item-center.component';
import { SettingsBarItemLeftComponent } from './settings-bar/components/settings-bar-item-left/settings-bar-item-left.component';
import { SettingsBarItemRightComponent } from './settings-bar/components/settings-bar-item-right/settings-bar-item-right.component';
import { SettingsBarComponent } from './settings-bar/settings-bar.component';
import { TabsComponent } from './tabs/tabs.component';

const exportedComponents = [
  IconComponent,
  SettingsBarComponent,
  TabsComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [
    ...exportedComponents,
    SettingsBarItemLeftComponent,
    SettingsBarItemCenterComponent,
    SettingsBarItemRightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...exportedComponents,
  ],
})
export class ComponentsModule { }
