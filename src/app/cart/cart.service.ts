import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Sticker } from '../stickers';
import { RootStore } from '../common';
import { StickerRemoveAction, TshirtRemoveAction } from '../common/cart.reducer';
import { Tshirt } from '../tshirts/tshirt.model';

export type Cart = {
  stickers: Sticker[],
  tshirts: Tshirt[]
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

  removeTshirt(tshirt: Tshirt) {
    this.store.dispatch(new TshirtRemoveAction(tshirt));
  }
}
