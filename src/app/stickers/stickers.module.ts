import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { StickersService } from './stickers.service';
import { StickersComponent } from './stickers.component';
import { EffectsModule } from '@ngrx/effects';
import { StickerEffects } from './effects/stickers.effects';

@NgModule({
  declarations: [StickersComponent],
  imports: [
    CommonModule,
    HttpModule,
    EffectsModule.run(StickerEffects)
  ],
  exports: [StickersComponent],
  providers: [StickersService],
})
export class StickersModule {
}
