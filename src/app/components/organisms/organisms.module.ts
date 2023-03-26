import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarsComponent } from './navbars/navbars.component';
import { MoleculesModule } from '../molecules/molecules.module';
import { SidebarComponent } from './sidebar/sidebar.component';

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
    MoleculesModule,
  ],
  exports: [
    ...exportedOrganisms,
  ],
})
export class OrganismsModule { }
