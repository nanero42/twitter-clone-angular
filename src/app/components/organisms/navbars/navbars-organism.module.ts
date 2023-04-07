import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarsOrganismComponent } from './navbars-organism.component';
import { NavbarMoleculaModule } from '../../molecules/navbar/navbar-molecula.module';
import { SettingsBarMoleculaModule } from '../../molecules/settings-bar/settings-bar-molecula.module';

@NgModule({
  declarations: [
    NavbarsOrganismComponent,
  ],
  imports: [
    CommonModule,
    NavbarMoleculaModule,
    SettingsBarMoleculaModule,
  ],
  exports: [
    NavbarsOrganismComponent,
  ],
})
export class NavbarsOrganismModule { }
