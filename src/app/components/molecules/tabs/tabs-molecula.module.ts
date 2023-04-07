import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconAtomModule } from '../../atoms/icon/icon-atom.module';
import { TabsMoleculaComponent } from './tabs-molecula.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TabsMoleculaComponent,
  ],
  imports: [
    CommonModule,
    IconAtomModule,
    RouterModule,
  ],
  exports: [
    TabsMoleculaComponent,
  ],
})
export class TabsMoleculaModule { }
