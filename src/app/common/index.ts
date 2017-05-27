import { cart, CartStore } from './cart.reducer';
import { combineReducers, Action, ActionReducer } from '@ngrx/store';
import { stickers, StickersStore } from './stickers.reducer';

export interface RootStore {
  cart: CartStore;
  stickers: StickersStore;
}

export const createRootReducer = (state: any, action: any): ActionReducer<any> => {
  return combineReducers({
    cart: cart,
    stickers: stickers
  })(state, action);
};

export * from './cart.reducer';
export * from './stickers.reducer';

// queries
const itemsNumberQuery = (store: RootStore) => store.cart.stickers.length + store.cart.tshirts.length;

export const CartQueries = {
  itemsNumber: itemsNumberQuery,
  isCartEmpty: (store: RootStore) => itemsNumberQuery(store) <= 0
};
