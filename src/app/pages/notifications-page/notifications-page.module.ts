import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsPageRoutingModule } from './notifications-page-routing.module';
import { NotificationsPageComponent } from './notifications-page.component';


@NgModule({
  declarations: [
    NotificationsPageComponent,
  ],
  imports: [
    CommonModule,
    NotificationsPageRoutingModule,
  ]
})
export class NotificationsPageModule { }
