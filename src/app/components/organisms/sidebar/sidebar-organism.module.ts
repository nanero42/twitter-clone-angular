import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidebarOrganismComponent } from './sidebar-organism.component';
import { AccountInfoMoleculaModule } from '../../molecules/account-info/account-info-molecula.module';
import { ListMoleculaModule } from '../../molecules/list/list-molecula.module';
import { AccordionMoleculaModule } from '../../molecules/accordion/accordion-molecula.module';

@NgModule({
  declarations: [
    SidebarOrganismComponent,
  ],
  imports: [
    CommonModule,
    AccountInfoMoleculaModule,
    ListMoleculaModule,
    AccordionMoleculaModule,
  ],
  exports: [
    SidebarOrganismComponent,
  ],
})
export class SidebarOrganismModule { }
