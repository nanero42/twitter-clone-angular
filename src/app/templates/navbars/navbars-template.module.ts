import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarsOrganismModule } from 'src/app/components/organisms/navbars/navbars-organism.module';
import { SidebarOrganismModule } from 'src/app/components/organisms/sidebar/sidebar-organism.module';
import { NavbarsTemplateComponent } from './navbars-template.component';

@NgModule({
  declarations: [
    NavbarsTemplateComponent,
  ],
  imports: [
    CommonModule,
    NavbarsOrganismModule,
    SidebarOrganismModule,
  ],
  exports: [
    NavbarsTemplateComponent,
  ],
})
export class NavbarsTemplateModule { }
