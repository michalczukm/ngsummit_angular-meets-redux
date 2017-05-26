import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sticker } from '../stickers';
import { CartService } from './cart.service';
import { Store } from '@ngrx/store';
import 'rxjs';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  stickers$: Observable<Sticker[]>;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.stickers$ = this.cartService.get().map(cart => cart.stickers);
  }

  removeSticker(sticker: Sticker) {
    this.cartService.removeSticker(sticker);
  }
}
