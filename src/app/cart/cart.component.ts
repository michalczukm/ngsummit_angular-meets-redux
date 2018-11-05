import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Sticker } from '../stickers';
import { CartService } from './cart.service';
import { Tshirt } from '../tshirts/tshirt.model';
import { RootStore, CartQueries } from '../common';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html',
  styles: [
    `img {
      width: 100px;
    }`
  ]
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

    this.stickers$ = cart$.pipe(map(cart => cart.stickers));
    this.tshirts$ = cart$.pipe(map(cart => cart.tshirts));
  }

  removeSticker(sticker: Sticker) {
    this.cartService.removeSticker(sticker);
  }

  removeTshirt(tshirt: Tshirt) {
    this.cartService.removeTshirt(tshirt);
  }
}
