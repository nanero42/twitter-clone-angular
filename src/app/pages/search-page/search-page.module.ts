import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    SearchPageComponent,
  ],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    ComponentsModule,
  ]
})
export class SearchPageModule { }
