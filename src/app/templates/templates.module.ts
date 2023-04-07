import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrganismsModule } from '../components/organisms/organisms.module';
import { NavbarsModule } from './navbars/navbars.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    OrganismsModule,
    NavbarsModule,
  ],
  exports: [
    NavbarsModule,
  ],
})
export class TemplatesModule { }
