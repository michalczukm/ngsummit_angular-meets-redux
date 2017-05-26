import { cart, CartStore } from './cart.reducer';
import { combineReducers, Action, ActionReducer } from '@ngrx/store';

export interface RootStore {
}

export const createRootReducer = (state: any, action: any): ActionReducer<any> => {
  return combineReducers({
  })(state, action);
};

export * from './cart.reducer';
