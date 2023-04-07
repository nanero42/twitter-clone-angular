import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { sidebarReducer } from 'src/store/sidebar/reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarsTemplateModule } from './templates/navbars/navbars-template.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      sidebar: sidebarReducer,
    }),
    NavbarsTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
