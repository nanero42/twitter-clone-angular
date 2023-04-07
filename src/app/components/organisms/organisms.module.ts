import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarsComponent } from './navbars/navbars.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccordionMoleculaModule } from '../molecules/accordion/accordion-molecula.module';
import { AccountInfoMoleculaModule } from '../molecules/account-info/account-info-molecula.module';
import { ListMoleculaModule } from '../molecules/list/list-molecula.module';
import { NavbarMoleculaModule } from '../molecules/navbar/navbar-molecula.module';
import { SettingsBarMoleculaModule } from '../molecules/settings-bar/settings-bar-molecula.module';
import { TabsMoleculaModule } from '../molecules/tabs/tabs-molecula.module';

const exportedOrganisms = [
  NavbarsComponent,
  SidebarComponent,
];

@NgModule({
  declarations: [
    ...exportedOrganisms,
  ],
  imports: [
    CommonModule,
    AccordionMoleculaModule,
    AccountInfoMoleculaModule,
    ListMoleculaModule,
    NavbarMoleculaModule,
    SettingsBarMoleculaModule,
    TabsMoleculaModule,
  ],
  exports: [
    ...exportedOrganisms,
  ],
})
export class OrganismsModule { }
