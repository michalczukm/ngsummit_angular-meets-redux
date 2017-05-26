import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickersComponent } from './stickers/stickers.component';
import { StickersService } from './stickers/stickers.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { cartReducer } from './common/cart.reducer';

@NgModule({
  declarations: [
    AppComponent,
    StickersComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore(cartReducer),
    AppRoutingModule

  ],
  providers: [
    CartService,
    StickersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
