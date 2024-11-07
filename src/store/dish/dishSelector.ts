import { AppStateType } from "../store";

export const getSearchDishes = (state: AppStateType) => {
   return state.dish.searchedDishes;
};

export const getDish = (state: AppStateType) => {
   return state.dish.dish;
};

export const getFavouriteDishIds = (state: AppStateType) => {
   return state.dish.favouriteDishIds;
};

export const getHomePageDishes = (state: AppStateType) => {
   return state.dish.homePageDishes;
};