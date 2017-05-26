import { Action, combineReducers } from '@ngrx/store';
import { Sticker } from '../stickers/sticker.model';

const initialState = {
  stickers: [] as Sticker[],
} as CartStore;

export interface CartStore {
  stickers: Sticker[];
}

export class StickerAddAction implements Action {
  type = 'STICKER_ADD';
  constructor(public payload: Sticker) {}
}

export class StickerRemoveAction implements Action {
  type = 'STICKER_REMOVE';
  constructor(public payload: Sticker) {}
}

type CartActions = StickerAddAction | StickerRemoveAction;

export const cart = (state = initialState, action: CartActions): CartStore => {
  switch (action.type as string) {
    case 'STICKER_ADD':
      return {
        ...state,
        stickers: [...state.stickers, Object.assign({}, action.payload)]
      };
    case 'STICKER_REMOVE':
      return {
        ...state,
        stickers: state.stickers.filter(s => s !== action.payload)
      };
    default:
      return state;
  }
};
