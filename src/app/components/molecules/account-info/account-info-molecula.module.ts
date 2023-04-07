import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconAtomModule } from '../../atoms/icon/icon-atom.module';
import { AccountInfoMoleculaComponent } from './account-info-molecula.component';


@NgModule({
  declarations: [
    AccountInfoMoleculaComponent,
  ],
  imports: [
    CommonModule,
    IconAtomModule,
  ],
  exports: [
    AccountInfoMoleculaComponent,
  ],
})
export class AccountInfoMoleculaModule { }
