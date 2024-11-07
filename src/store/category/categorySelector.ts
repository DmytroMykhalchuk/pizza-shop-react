import { AppStateType } from "../store";

export const getCategories = (state: AppStateType) => {
   return state.category.categories;
};

export const getCategoryDishes = (state: AppStateType) => {
   return state.category.categoryDishes;
};
