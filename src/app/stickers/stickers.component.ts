import { Component, OnInit } from '@angular/core';
import { StickersService } from './stickers.service';
import { Observable } from 'rxjs/Observable';
import { Sticker } from './sticker.model';
import { Store } from '@ngrx/store';
import { CartService } from '../cart/cart.service';
import { RootStore } from '../common/index';
import { StickerAddAction } from '../common/cart.reducer';

@Component({
  selector: 'smt-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.css']
})
export class StickersComponent implements OnInit {
  stickers$: Observable<Sticker[]>;

  constructor(
    private stickersService: StickersService,
    private store: Store<RootStore>) {
  }

  ngOnInit() {
    this.stickers$ = this.stickersService.getAll();
  }

  buy(sticker: Sticker) {
    this.store.dispatch(new StickerAddAction(sticker));
  }
}
