import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AccordionModule } from '../accordion/accordion.module';

const exportedComponents = [
  SidebarComponent,
]

@NgModule({
  declarations: [
    ...exportedComponents,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AccordionModule,
  ],
  exports: [
    ...exportedComponents,
  ],
})
export class SidebarModule { }
