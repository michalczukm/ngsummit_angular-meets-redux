import { Action, combineReducers } from '@ngrx/store';
import { Sticker } from '../stickers/sticker.model';
import { Tshirt } from '../tshirts/tshirt.model';

const initialState = {
  stickers: [] as Sticker[],
  tshirts: [] as Tshirt[]
} as CartStore;

export interface CartStore {
  stickers: Sticker[];
  tshirts: Tshirt[];
}

export class StickerAddAction implements Action {
  type = 'STICKER_ADD';
  constructor(public payload: Sticker) {}
}

export class StickerRemoveAction implements Action {
  type = 'STICKER_REMOVE';
  constructor(public payload: Sticker) {}
}

export class TshirtAddAction implements Action {
  type = 'TSHIRT_ADD';
  constructor(public payload: Tshirt) {}
}

export class TshirtRemoveAction implements Action {
  type = 'TSHIRT_REMOVE';
  constructor(public payload: Tshirt) {}
}


type CartActions = StickerAddAction | StickerRemoveAction |
                   TshirtAddAction | TshirtRemoveAction;

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
    case 'TSHIRT_ADD':
      return {
        ...state,
        tshirts: [...state.tshirts, Object.assign({}, action.payload)]
      };
    case 'TSHIRT_REMOVE':
      return {
        ...state,
        tshirts: state.tshirts.filter(s => s !== action.payload)
      };
    default:
      return state;
  }
};
