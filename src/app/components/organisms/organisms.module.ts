import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MoleculesModule } from '../molecules/molecules.module';

const exportedOrganisms = [
  MenuComponent,
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
