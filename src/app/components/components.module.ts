import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const exportedComponents = [
  ButtonComponent,
  IconComponent,
  MenuComponent,
  TabsComponent,
  NavbarComponent,
  SidebarComponent,
];

@NgModule({
  declarations: exportedComponents,
  exports: exportedComponents,
  imports: [
    CommonModule,
    RouterModule,
  ],
})
export class ComponentsModule { }
