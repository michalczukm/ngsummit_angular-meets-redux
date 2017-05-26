import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sticker } from '../stickers/sticker.model';
import { CartService } from './cart.service';
import { RootStore } from '../common/cart.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  stickers$: Observable<Sticker[]>;

  constructor(private cartService: CartService,
              private store: Store<RootStore>) {
    this.stickers$ = this.store.select(s => s.cart.stickers);
  }

  remove(sticker: Sticker) {
    this.cartService.remove(sticker);
  }
}
