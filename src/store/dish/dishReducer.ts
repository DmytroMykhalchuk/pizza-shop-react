import { AppStateType, InferActionsTypes } from '../store';
import { dishApi } from '../../api/dishApi';
import { Dispatch } from 'redux';
import { DishType, FullDishType } from './dishTypes';
import { ThunkAction } from 'redux-thunk';
import { favouriteDishesKey } from '../../constants/storageConstants';

const SET_SEARCH_DISHES = 'dish/SET_SEARCH_DISHES';
const SET_DISH = 'dish/SET_DISH';

const TOGGLE_FAVORITE_DISH = 'dish/TOGGLE_FAVORITE_DISH';

const initialState = {
   searchedDishes: null as null | DishType[],
   dish: null as null | FullDishType,
   favouriteDishes: JSON.parse(localStorage.getItem(favouriteDishesKey) ?? '[]') as number[],
};

type StateType = typeof initialState;

const dishReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case SET_SEARCH_DISHES: {
         return {
            ...state,
            searchedDishes: action.dishes,
         };
      }

      case SET_DISH: {
         return {
            ...state,
            dish: action.dish,
         };
      }

      case TOGGLE_FAVORITE_DISH: {
         return {
            ...state,
            favouriteDishes: action.dishes,
         };
      }

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setDishes: (dishes: DishType[]) => { return { type: SET_SEARCH_DISHES, dishes, } as const; },
   setDish: (dish: FullDishType) => { return { type: SET_DISH, dish, } as const; },
   setFavouriteDishes: (dishes: number[]) => { return { type: TOGGLE_FAVORITE_DISH, dishes, } as const; },

};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const searchDishes = (search: string): ThunksTypes => {
   return async (dispatch) => {
      const response = await dishApi.searchDishes(search);

      if (response?.code === 200) {
         dispatch(actions.setDishes(response.data));
      }
   };
};

export const requireDish = (dishId: number): ThunksTypes => {
   return async (dispatch) => {
      const response = await dishApi.getDish(dishId);

      if (response?.code === 200) {
         dispatch(actions.setDish(response.data));
      }
   };
};

export const toggleFavouriteDish = (dishId: number, favoriteDishes: number[]): ThunksTypes => {
   return async (dispatch) => {
      const indexOf = favoriteDishes.indexOf(dishId);
      const updatedDishes = [...favoriteDishes];

      if (indexOf === -1) {
         updatedDishes.push(dishId);
      } else {
         updatedDishes.splice(indexOf, 1);
      }
      dispatch(actions.setFavouriteDishes(updatedDishes))

      localStorage.setItem(favouriteDishesKey, JSON.stringify(updatedDishes));
   };
};

export default dishReducer;