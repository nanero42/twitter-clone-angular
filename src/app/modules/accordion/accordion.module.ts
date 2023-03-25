import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { ComponentsModule } from '../../components/components.module';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';

const exportedComponents = [
  AccordionComponent,
  AccordionItemComponent,
]

@NgModule({
  declarations: [
    ...exportedComponents,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports: [
    ...exportedComponents,
  ]
})
export class AccordionModule { }
