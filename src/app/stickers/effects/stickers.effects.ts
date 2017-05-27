import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Sticker } from '../sticker.model';
import { StickersService } from '../stickers.service';

@Injectable()
export class StickerEffects {
    // @Effect()

    constructor(private actions$: Actions, private stickersService: StickersService) {
    }
}
