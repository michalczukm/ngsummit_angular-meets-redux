import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Sticker } from '../stickers/sticker.model';
import { CartService } from './cart.service';

@Component({
  selector: 'smt-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  stickers$: Observable<Sticker[]>;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.stickers$ = this.cartService.state;
  }

  remove(sticker: Sticker) {
    this.cartService.remove(sticker);
  }
}
