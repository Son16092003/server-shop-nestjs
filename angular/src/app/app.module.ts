import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http'
import { ItemEffect } from './effects/item.effect'
import { itemReducer } from '../../src/app/reduces/item.reduce';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './components/navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot({
      item: itemReducer 
    }, {}),
    EffectsModule.forRoot([
      ItemEffect
    ]),  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


