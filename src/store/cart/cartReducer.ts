import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { cartKey } from '../../constants/storageConstants';
import { CartType } from './cartTypes';
import { cartApi } from '../../api/cartApi';
import { DishType } from '../dish/dishTypes';

const SET_HAS_ITEMS = 'cart/SET_HAS_ITEMS';
const SET_CART_DISH_IDS = 'cart/SET_CART_DISH_IDS';
const SET_CART_DISHES = 'cart/SET_CART_DISHES';

const REMOVE_DISH_FROM_CART = 'cart/REMOVE_DISH_FROM_CART';

const initialState = {
   hasItems: false,
   cartDishIds: [] as CartType[],
   dishes: null as null | DishType[],
};

type StateType = typeof initialState;
const cartReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case SET_HAS_ITEMS: {
         return {
            ...state,
            hasItems: action.hasItems,
         };
      }

      case SET_CART_DISH_IDS: {
         return {
            ...state,
            cartDishIds: action.dishIds,
         };
      }

      case SET_CART_DISHES: {
         return {
            ...state,
            dishes: action.dishes,
         };
      }

      case REMOVE_DISH_FROM_CART: {
         return {
            ...state,
            dishes: state.dishes?.filter(item => item.id !== action.dishId) || state.dishes,
         };
      }

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setHasItems: (hasItems: boolean) => { return { type: SET_HAS_ITEMS, hasItems, } as const; },
   setCartDishIds: (dishIds: CartType[]) => { return { type: SET_CART_DISH_IDS, dishIds, } as const; },
   setCartDishes: (dishes: DishType[]) => { return { type: SET_CART_DISHES, dishes, } as const; },
   removeDish: (dishId: number) => { return { type: REMOVE_DISH_FROM_CART, dishId, } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const addToCartDish = (cartDish: CartType): ThunksTypes => {
   return async (dispatch) => {
      const cart = JSON.parse(localStorage.getItem(cartKey) ?? '[]');

      let isCartUpdated = false;
      cart.forEach((element: CartType) => {
         if (element.dishId === cartDish.dishId && element.sizeId === cartDish.sizeId) {
            isCartUpdated = true;
            element.count += cartDish.count;
         }
      });

      if (!isCartUpdated) {
         cart.push(cartDish)
      }

      localStorage.setItem(cartKey, JSON.stringify(cart));
      dispatch(actions.setCartDishIds(cart));
   };
};

export const initCart = (): ThunksTypes => {
   return async (dispatch) => {
      const cart = JSON.parse(localStorage.getItem(cartKey) ?? '[]');

      const hasItems = cart.length > 0;
      dispatch(actions.setHasItems(hasItems));
      dispatch(actions.setCartDishIds(cart));
   };
};

export const requireCartDishes = (dishIds: number[]): ThunksTypes => {
   return async (dispatch) => {
      const response = await cartApi.getCartDishes(dishIds);
      if (response?.code === 200) {
         dispatch(actions.setCartDishes(response.data));
      }
   };
};

export const removeDishFromCart = (dishId: number): ThunksTypes => {
   return async (dispatch) => {
      const cart = JSON.parse(localStorage.getItem(cartKey) ?? '[]') as CartType[];

      const filteredCart = cart.filter(item => item.dishId !== dishId);

      localStorage.setItem(cartKey, JSON.stringify(filteredCart));
      dispatch(actions.removeDish(dishId));
      dispatch(actions.setCartDishIds(cart));
   };
};

export default cartReducer;