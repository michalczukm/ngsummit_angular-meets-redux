import { Action } from '@ngrx/store';
import { ActionReducer } from '@ngrx/store';
import { Sticker } from '../stickers';

export interface StickersStore {
  stickers: Sticker[];
}

const initialState = {
  stickers: []
} as StickersStore;

export class FetchStickersAction implements Action {
  type = 'STICKERS_FETCH_STICKERS';
}

export class StickersFetchedAction implements Action {
  type = 'STICKERS_FETCHED';
  constructor(public payload: Sticker[]) {}
}

type StickersActions = FetchStickersAction | StickersFetchedAction;

export const stickers: ActionReducer<StickersStore> = (state = initialState, action: StickersActions): StickersStore => {
  switch (action.type) {
    case 'STICKERS_FETCHED':
      return {
        ...state,
        stickers: (action as StickersFetchedAction).payload
      };
    default:
      return state;
  }
};
