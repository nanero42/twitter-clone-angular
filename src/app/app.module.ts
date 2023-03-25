import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from 'src/store/sidebar/reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { OrganismsModule } from './components/organisms/organisms.module';
import { AccordionModule } from './modules/accordion/accordion.module';
import { SidebarModule } from './modules/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    StoreModule.forRoot({
      sidebar: sidebarReducer,
    }),
    OrganismsModule,
    AccordionModule,
    SidebarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
