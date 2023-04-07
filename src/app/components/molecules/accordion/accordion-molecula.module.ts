import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionMoleculaComponent } from './accordion-molecula.component';
import { AccordionMoleculaItemComponent } from './components/accordion-item/accordion-molecula-item.component';
import { IconAtomModule } from '../../atoms/icon/icon-atom.module';


@NgModule({
  declarations: [
    AccordionMoleculaComponent,
    AccordionMoleculaItemComponent,
  ],
  imports: [
    CommonModule,
    IconAtomModule,
  ],
  exports: [
    AccordionMoleculaComponent,
    AccordionMoleculaItemComponent,
  ],
})
export class AccordionMoleculaModule { }
