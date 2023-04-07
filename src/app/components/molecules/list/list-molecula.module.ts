import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListMoleculaComponent } from './list-molecula.component';
import { IconAtomModule } from '../../atoms/icon/icon-atom.module';

@NgModule({
  declarations: [
    ListMoleculaComponent,
  ],
  imports: [
    CommonModule,
    IconAtomModule,
  ],
  exports: [
    ListMoleculaComponent,
  ],
})
export class ListMoleculaModule { }
