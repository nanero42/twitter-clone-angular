import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';

const exportedAtoms = [
  IconComponent,
]

@NgModule({
  declarations: [
    ...exportedAtoms,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ...exportedAtoms,
  ]
})
export class AtomsModule { }
