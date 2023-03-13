import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsPageComponent } from './notifications-page.component';

const routes: Routes = [
  { path: '', component: NotificationsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsPageRoutingModule { }
