import { AppStateType } from "../store";

export const getSearchDishes = (state: AppStateType) => {
   return state.dish.searchedDishes;
};

export const getDish = (state: AppStateType) => {
   return state.dish.dish;
};

export const getFavouriteDishes = (state: AppStateType) => {
   return state.dish.favouriteDishes;
};