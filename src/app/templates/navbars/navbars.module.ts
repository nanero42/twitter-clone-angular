import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarsComponent } from './navbars.component';
import { OrganismsModule } from 'src/app/components/organisms/organisms.module';

@NgModule({
  declarations: [
    NavbarsComponent,
  ],
  imports: [
    CommonModule,
    OrganismsModule,
  ],
  exports: [
    NavbarsComponent,
  ],
})
export class NavbarsModule { }
