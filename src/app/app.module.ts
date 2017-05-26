import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickersModule } from './stickers';
import { CartModule } from './cart';
import { createRootReducer } from './common/index';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartModule,
    StickersModule,
    StoreModule.provideStore(createRootReducer),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
