import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { StickersService } from './stickers.service';
import { Sticker } from './sticker.model';
import { CartService } from '../cart/cart.service';
import { RootStore } from '../common';
import { StickerAddAction } from '../common/cart.reducer';
import { FetchStickersAction } from '../common/stickers.reducer';

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent {
  stickers$: Observable<Sticker[]>;

  constructor(private store: Store<RootStore>) {
    this.stickers$ = this.store.select((state) => state.stickers.stickers);
    this.store.dispatch(new FetchStickersAction());
  }

  buy(sticker: Sticker) {
    this.store.dispatch(new StickerAddAction(sticker));
  }
}
