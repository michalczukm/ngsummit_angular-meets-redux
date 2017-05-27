import { cart, CartStore } from './cart.reducer';
import { combineReducers, Action, ActionReducer } from '@ngrx/store';

export interface RootStore {
  cart: CartStore;
}

export const createRootReducer = (state: any, action: any): ActionReducer<any> => {
  return combineReducers({
    cart: cart,
  })(state, action);
};

export * from './cart.reducer';

// queries
const itemsNumberQuery = (store: RootStore) => store.cart.stickers.length + store.cart.tshirts.length;

export const CartQueries = {
  itemsNumber: itemsNumberQuery,
  isCartEmpty: (store: RootStore) => itemsNumberQuery(store) <= 0
};
