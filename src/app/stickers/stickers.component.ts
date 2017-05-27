import { Component, OnInit } from '@angular/core';
import { StickersService } from './stickers.service';
import { Observable } from 'rxjs/Observable';
import { Sticker } from './sticker.model';
import { Store } from '@ngrx/store';
import { CartService } from '../cart/cart.service';
import { RootStore } from '../common/index';
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
