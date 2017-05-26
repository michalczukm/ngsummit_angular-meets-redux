import { Action, combineReducers } from '@ngrx/store';
import { Sticker } from '../stickers/sticker.model';

const initialState = {
  stickers: [ ] as Sticker[],
  isCartOpen: false
} as CartStore;

export interface CartStore {
  stickers: Sticker[];
  isCartOpen: boolean;
}

export class StickerAddAction implements Action {
  type = 'STICKER_ADD';
  constructor(public payload: Sticker) {}
}

export class StickerRemoveAction implements Action {
  type = 'STICKER_REMOVE';
  constructor(public payload: Sticker) {}
}

export class CartOpenAction implements Action {
  type = 'CART_OPEN';
}

export class CartCloseAction implements Action {
  type = 'CART_CLOSE';
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
    case 'CART_OPEN':
      return {
        ...state,
        isCartOpen: true
      };
    case 'CART_CLOSE':
      return {
        ...state,
        isCartOpen: false
      };
    default:
      return state;
  }
};

export interface RootStore {
  cart: CartStore;
}

export const CartQueries = {
  itemsNumber: (store: RootStore) => store.cart.stickers.length
};

export const cartReducer = combineReducers({
  cart: cart
});
