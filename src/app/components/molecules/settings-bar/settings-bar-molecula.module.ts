import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsBarMoleculaComponent } from './settings-bar-molecula.component';
import { SettingsBarItemCenterMoleculaComponent } from './components/settings-bar-item-center-molecula/settings-bar-item-center-molecula.component';
import { SettingsBarItemLeftMoleculaComponent } from './components/settings-bar-item-left-molecula/settings-bar-item-left-molecula.component';
import { IconAtomModule } from '../../atoms/icon/icon-atom.module';
import { SettingsBarItemRightMoleculaComponent } from './components/settings-bar-item-right-molecula/settings-bar-item-right-molecula.component';
import { TabsMoleculaModule } from '../tabs/tabs-molecula.module';

@NgModule({
  declarations: [
    SettingsBarMoleculaComponent,
    SettingsBarItemCenterMoleculaComponent,
    SettingsBarItemLeftMoleculaComponent,
    SettingsBarItemRightMoleculaComponent,
  ],
  imports: [
    CommonModule,
    IconAtomModule,
    TabsMoleculaModule,
  ],
  exports: [
    SettingsBarMoleculaComponent,
  ],
})
export class SettingsBarMoleculaModule { }
