import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuItemLeftComponent } from './menu/components/menu-item-left/menu-item-left.component';
import { MenuItemCenterComponent } from './menu/components/menu-item-center/menu-item-center.component';
import { MenuItemRightComponent } from './menu/components/menu-item-right/menu-item-right.component';

const exportedComponents = [
  IconComponent,
  MenuComponent,
  TabsComponent,
  NavbarComponent,
];

@NgModule({
  declarations: [
    ...exportedComponents,
    MenuItemLeftComponent,
    MenuItemCenterComponent,
    MenuItemRightComponent,
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
