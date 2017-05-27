import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sticker } from '../stickers';
import { CartService } from './cart.service';
import { Store } from '@ngrx/store';
import 'rxjs';
import { Tshirt } from '../tshirts/tshirt.model';
import { RootStore } from 'app/common';
import { CartQueries } from '../common/index';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  stickers$: Observable<Sticker[]>;
  tshirts$: Observable<Tshirt[]>;
  isCartEmpty$: Observable<boolean>;

  constructor(private cartService: CartService,
    private store: Store<RootStore>) {

    this.isCartEmpty$ = this.store.select(CartQueries.isCartEmpty);
  }

  ngOnInit() {
    const cart$ = this.cartService.get();

    this.stickers$ = cart$.map(cart => cart.stickers);
    this.tshirts$ = cart$.map(cart => cart.tshirts);
  }

  removeSticker(sticker: Sticker) {
    this.cartService.removeSticker(sticker);
  }

  removeTshirt(tshirt: Tshirt) {
    this.cartService.removeTshirt(tshirt);
  }
}
