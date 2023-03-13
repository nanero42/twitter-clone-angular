import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLowComponent } from './navbar-low/navbar-low.component';
import { TabsComponent } from './tabs/tabs.component';

const exportedComponents = [
  ButtonComponent,
  IconComponent,
  NavbarComponent,
  TabsComponent,
  NavbarLowComponent,
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
