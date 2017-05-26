import { Injectable } from '@angular/core';
import { Sticker } from '../stickers/sticker.model';
import { Store } from '@ngrx/store';
import { RootStore, StickerAddAction, StickerRemoveAction } from '../common/cart.reducer';

@Injectable()
export class CartService {
  constructor(private store: Store<RootStore>) {
  }

  add(sticker: Sticker) {
    this.store.dispatch(new StickerAddAction(sticker));
  }

  remove(sticker: Sticker) {
    this.store.dispatch(new StickerRemoveAction(sticker));
  }
}
