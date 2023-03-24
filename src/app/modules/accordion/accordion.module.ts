import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordioComponentsModule } from './components/accordio-components.module';
import { ComponentsModule } from '../../components/components.module';

const exportedComponents = [
  AccordionComponent,
]

@NgModule({
  declarations: [
    ...exportedComponents,
  ],
  imports: [
    CommonModule,
    AccordioComponentsModule,
    ComponentsModule,
  ],
  exports: [
    ...exportedComponents,
    AccordioComponentsModule,
  ]
})
export class AccordionModule { }
