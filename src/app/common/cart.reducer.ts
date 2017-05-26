import { Action, combineReducers } from '@ngrx/store';
import { Sticker } from '../stickers/sticker.model';

const initialState = {
  stickers: [ ] as Sticker[]
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

const cart = (state = initialState, action: StickerAddAction | StickerRemoveAction): CartStore => {
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

export interface RootStore {
  cart: CartStore;
}

export const cartReducer = combineReducers({
  cart: cart
});
