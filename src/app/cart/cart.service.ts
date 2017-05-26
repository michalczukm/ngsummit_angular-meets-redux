import { Injectable } from '@angular/core';
import { Sticker } from '../stickers/sticker.model';
import { Store } from '@ngrx/store';
import { RootStore, StickerAddAction, StickerRemoveAction } from '../common/cart.reducer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CartService {

  public state: Observable<Sticker[]>;

  constructor(private store: Store<RootStore>) {
    this.state = this.store.select(s => s.cart.stickers);
    this.store.select(s => s).subscribe(x => console.log('succes: ' + JSON.stringify(x)), y => console.log('failed: ' + y))
  }

  add(sticker: Sticker) {
    this.store.dispatch(new StickerAddAction(sticker));
  }

  remove(sticker: Sticker) {
    this.store.dispatch(new StickerRemoveAction(sticker));
  }
}
