import { Injectable } from '@angular/core';
import { Sticker } from '../stickers';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { RootStore } from 'app/common';
import { Store } from '@ngrx/store';
import { StickerRemoveAction } from '../common/cart.reducer';

export type Cart = {
  stickers: Sticker[]
};

@Injectable()
export class CartService {

  constructor(private store: Store<RootStore>) { }

  get(): Observable<Cart> {
    return this.store.select(store => store.cart);
  }

  removeSticker(sticker: Sticker) {
    this.store.dispatch(new StickerRemoveAction(sticker));
  }
}
