import { Injectable } from '@angular/core';
import { Sticker } from '../stickers';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export type Cart = {
  stickers: Sticker[]
};

@Injectable()
export class CartService {
  private stickersSubject = new Subject<Cart>();
  private cart = { stickers: [] } as Cart;

  get(): Observable<Cart> {
    return this.stickersSubject.asObservable();
  }

  addSticker(sticker: Sticker) {
    this.cart.stickers.push(sticker);
    this.stickersSubject.next(this.cart);
  }

  removeSticker(sticker: Sticker) {
    const index = this.cart.stickers.indexOf(sticker);
    if (index > -1) {
      this.cart.stickers.splice(index, 1);
    }

    this.stickersSubject.next(this.cart);
  }
}
