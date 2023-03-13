import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'messages', loadChildren: () => import('./pages/messages-page/messages-page.module').then(m => m.MessagesPageModule) },
  { path: 'notifications', loadChildren: () => import('./pages/notifications-page/notifications-page.module').then(m => m.NotificationsPageModule) },
  { path: 'search', loadChildren: () => import('./pages/search-page/search-page.module').then(m => m.SearchPageModule) },
  { path: '**', loadChildren: () => import('./pages/error-page/error-page.module').then(m => m.ErrorPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
