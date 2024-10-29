import { AppStateType } from "../store";

export const getCategories = (state: AppStateType) => {
   return state.category.categories;
};
