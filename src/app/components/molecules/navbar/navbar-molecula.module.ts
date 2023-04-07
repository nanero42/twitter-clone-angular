import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarMoleculaComponent } from './navbar-molecula.component';
import { NavbarItemMoleculaComponent } from './navbar-item/navbar-item-molecula.component';
import { IconAtomModule } from '../../atoms/icon/icon-atom.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarMoleculaComponent,
    NavbarItemMoleculaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconAtomModule,
  ],
  exports: [
    NavbarMoleculaComponent,
  ],
})
export class NavbarMoleculaModule { }
