import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StickersService } from './stickers.service';
import { StickersComponent } from './stickers.component';
import { StickerEffects } from './effects/stickers.effects';

@NgModule({
  declarations: [StickersComponent],
  imports: [
    CommonModule,
    HttpModule,
    EffectsModule.forFeature([StickerEffects])
  ],
  exports: [StickersComponent],
  providers: [StickersService],
})
export class StickersModule {
}
