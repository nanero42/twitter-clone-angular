import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesPageRoutingModule } from './messages-page-routing.module';
import { MessagesPageComponent } from './messages-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    MessagesPageComponent,
  ],
  imports: [
    CommonModule,
    MessagesPageRoutingModule,
    ComponentsModule,
  ]
})
export class MessagesPageModule { }
