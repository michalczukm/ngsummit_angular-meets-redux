import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { Sticker } from '../sticker.model';
import { StickersService } from '../stickers.service';
import { StickersFetchedAction } from '../../common';

@Injectable()
export class StickerEffects {
  @Effect()
  get$: Observable<Action> = this.actions$.ofType('STICKERS_FETCH_STICKERS')
    .pipe(
      flatMap(() => {
        return this.stickersService.getAll()
          .pipe(
            map((result: Sticker[]) => new StickersFetchedAction(result))
          )
      })
    );

  constructor(private actions$: Actions, private stickersService: StickersService) {
  }
}
