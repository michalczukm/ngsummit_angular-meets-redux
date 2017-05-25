import { Injectable } from '@angular/core';
import { Sticker } from '../stickers/sticker.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {
  private stickersSubject = new Subject<Sticker[]>();
  private stickers = [] as Sticker[];

  public state = this.stickersSubject.asObservable();

  add(sticker: Sticker) {
    this.stickers.push(sticker);
    this.stickersSubject.next(this.stickers);
  }

  remove(sticker: Sticker) {
    const index = this.stickers.indexOf(sticker);
    if (index > -1) {
      this.stickers.splice(index, 1);
    }

    this.stickersSubject.next(this.stickers);
  }
}
