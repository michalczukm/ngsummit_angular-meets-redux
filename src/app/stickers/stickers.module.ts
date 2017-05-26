import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { StickersService } from './stickers.service';
import { StickersComponent } from './stickers.component';

@NgModule({
  declarations: [StickersComponent],
  imports: [
    CommonModule,
    HttpModule,
  ],
  exports: [StickersComponent],
  providers: [StickersService],
})
export class StickersModule {
}
