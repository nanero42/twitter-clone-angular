import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganismsModule } from '../components/organisms/organisms.module';
import { NavbarsComponent } from './navbars/navbars.component';

const exportedTemplates = [
  NavbarsComponent,
];

@NgModule({
  declarations: [
    ...exportedTemplates,
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ],
  exports: [
    ...exportedTemplates,
  ],
})
export class TemplatesModule { }
