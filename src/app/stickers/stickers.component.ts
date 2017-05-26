import { Component, OnInit } from '@angular/core';
import { StickersService } from './stickers.service';
import { Observable } from 'rxjs/Observable';
import { Sticker } from './sticker.model';
import { CartService } from '../cart/cart.service';
import { Store } from '@ngrx/store';
import { RootStore } from 'app/common';
import 'rxjs';

type StickerActivity = Sticker & { isInactive: boolean };

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  stickers$: Observable<StickerActivity[]>;

  constructor(private stickersService: StickersService,
    private cartService: CartService,
    private store: Store<RootStore>) {

    this.stickers$ = this.stickersService.GetAll();

    this.store.select(store => store.cart).distinctUntilChanged(null, cartStore => cartStore.isCartOpen)
      .subscribe(cart => {
        if (cart.isCartOpen) {
          const names = cart.stickers.map(s => s.name).filter((elem, pos, arr) => arr.indexOf(elem) === pos);

          this.stickers$ = Observable.from([this.stickers$.switch((ss) => {
            ss.forEach(s => s.isInactive = names.includes(s.name));
            return [ss];
          })]);
        } else {
          this.stickers$ = Observable.from(this.stickers$.switchMap((ss) => {
            ss.forEach(s => s.isInactive = false);
            return [ss];
          }));
        }
      });
  }

  ngOnInit() {
  }

  buy(sticker: Sticker) {
    this.cartService.add(sticker);
  }
}
