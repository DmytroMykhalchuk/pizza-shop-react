import { AppStateType, InferActionsTypes } from '../store';
import { categoryApi } from '../../api/categoryApi';
import { CategoryType } from './categoryTypes';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { DishType } from '../dish/dishTypes';

const SET_CATEGORIES = 'category/SET_CATEGORIES';
const SET_CATEGORY_DISHES = 'category/SET_CATEGORY_DISHES';

const initialState = {
   categories: null as null | CategoryType[],
   categoryDishes: null as null | DishType[],
};

type StateType = typeof initialState;
const categoryReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case SET_CATEGORIES: {
         return {
            ...state,
            categories: action.categories,
         };
      }

      case SET_CATEGORY_DISHES: {
         return {
            ...state,
            categoryDishes: action.dishes,
         };
      }
      
      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setCategories: (categories: CategoryType[]) => { return { type: SET_CATEGORIES, categories, } as const; },
   setCategoryDishes: (dishes: DishType[]) => { return { type: SET_CATEGORY_DISHES, dishes, } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requireCategories = (): ThunksTypes => {
   return async (dispatch) => {
      const response = await categoryApi.getCategories();

      if (response?.code === 200) {
         dispatch(actions.setCategories(response.data));
      }
   };
};

export const requireCategoryDishes = (slug: string): ThunksTypes => {
   return async (dispatch) => {
      const response = await categoryApi.getCategoryDishes(slug);

      if (response?.code === 200) {
         dispatch(actions.setCategoryDishes(response.data));
      }
   };
};

export default categoryReducer;