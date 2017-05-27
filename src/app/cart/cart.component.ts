import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sticker } from '../stickers';
import { CartService } from './cart.service';
import { Store } from '@ngrx/store';
import 'rxjs';
import { Tshirt } from '../tshirts/tshirt.model';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  stickers$: Observable<Sticker[]>;
  tshirts$: Observable<Tshirt[]>;

  constructor(private cartService: CartService) {
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
