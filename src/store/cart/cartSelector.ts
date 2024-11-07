import { AppStateType } from "../store";

export const getHasCartItems = (state: AppStateType) => {
   return state.cart.cartDishIds.length;
};

export const getCartDishIds = (state: AppStateType) => {
   return state.cart.cartDishIds;
};

export const getCartDishes = (state: AppStateType) => {
   return state.cart.dishes;
}