import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const exportedMolecules: any = [];

@NgModule({
  declarations: [
    ...exportedMolecules,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...exportedMolecules,
  ],
})
export class MoleculesModule { }
