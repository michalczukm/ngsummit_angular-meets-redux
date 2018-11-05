import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickersModule } from './stickers';
import { CartModule } from './cart';
import { reducers } from './common';
import { TshirtsModule } from './tshirts';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartModule,
    StickersModule,
    TshirtsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
