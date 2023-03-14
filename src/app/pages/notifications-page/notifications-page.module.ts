import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsPageRoutingModule } from './notifications-page-routing.module';
import { NotificationsPageComponent } from './notifications-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    NotificationsPageComponent,
  ],
  imports: [
    CommonModule,
    NotificationsPageRoutingModule,
    ComponentsModule,
  ]
})
export class NotificationsPageModule { }
