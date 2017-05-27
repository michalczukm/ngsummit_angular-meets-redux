import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { TshirtsService } from './tshirts.service';
import { TshirtsComponent } from './tshirts.component';

@NgModule({
  declarations: [TshirtsComponent],
  imports: [CommonModule, HttpModule],
  exports: [TshirtsComponent],
  providers: [TshirtsService],
})
export class TshirtsModule {
}
