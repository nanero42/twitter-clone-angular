import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { IconComponent } from './icon/icon.component';
import { ButtonComponent } from './button/button.component';
import { TabsComponent } from './tabs/tabs.component';

const exportedComponents = [
  ButtonComponent,
  IconComponent,
  TopMenuComponent,
  TabsComponent,
];

@NgModule({
  declarations: exportedComponents,
  exports: exportedComponents,
  imports: [
    CommonModule,
  ],
})
export class ComponentsModule { }
