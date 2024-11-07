import { AppStateType, InferActionsTypes } from '../store';
import { dishApi } from '../../api/dishApi';
import { Dispatch } from 'redux';
import { DishType, FullDishType, HomePageDishesType } from './dishTypes';
import { ThunkAction } from 'redux-thunk';
import { favouriteDishesKey } from '../../constants/storageConstants';
import { successStatus } from '../../api/api';

const SET_SEARCH_DISHES = 'dish/SET_SEARCH_DISHES';
const SET_DISH = 'dish/SET_DISH';
const SET_HOME_PAGE_DISHES = 'dish/SET_HOME_PAGE_DISHES';
const ADD_FAVORITE_DISH = 'dish/ADD_FAVORITE_DISH';
const SET_FAVORITE_DISH = 'dish/SET_FAVORITE_DISH';
const REMOVE_FAVORITE_DISH = 'dish/REMOVE_FAVORITE_DISH';

const initialState = {
   searchedDishes: null as null | DishType[],
   dish: null as null | FullDishType,
   favouriteDishIds: JSON.parse(localStorage.getItem(favouriteDishesKey) ?? '[]') as number[],
   homePageDishes: {
      popular: null as null | DishType[],
      new: null as null | DishType[],
      favorites: null as null | DishType[],
   } as HomePageDishesType,
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

      case SET_HOME_PAGE_DISHES: {
         return {
            ...state,
            homePageDishes: action.dishes,
         };
      }

      case SET_FAVORITE_DISH: {
         return {
            ...state,
            favouriteDishIds: action.dishes,
         };
      }

      case ADD_FAVORITE_DISH: {
         return {
            ...state,
            homePageDishes: {
               ...state.homePageDishes,
               favorites: state.homePageDishes?.favorites
                  ? [...state.homePageDishes?.favorites, action.dish]
                  : state.homePageDishes?.favorites,
            },
         };
      }

      case REMOVE_FAVORITE_DISH: {
         return {
            ...state,
            homePageDishes: {
               ...state.homePageDishes,
               favorites: state.homePageDishes?.favorites
                  ? state.homePageDishes?.favorites.filter(dish => dish.id !== action.dishId)
                  : state.homePageDishes?.favorites,
            }
         }
      }

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setDishes: (dishes: DishType[]) => { return { type: SET_SEARCH_DISHES, dishes, } as const; },
   setDish: (dish: FullDishType) => { return { type: SET_DISH, dish, } as const; },
   setFavouriteDishes: (dishes: number[]) => { return { type: SET_FAVORITE_DISH, dishes, } as const; },
   setHomePageDishes: (dishes: HomePageDishesType) => { return { type: SET_HOME_PAGE_DISHES, dishes, } as const; },
   addFavoriteDish: (dish: DishType) => { return { type: ADD_FAVORITE_DISH, dish, } as const; },
   removeFavoriteDish: (dishId: number) => { return { type: REMOVE_FAVORITE_DISH, dishId, } as const; },
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

export const toggleFavouriteDish = (dishId: number, favoriteDishes: number[], dish = null as null | DishType): ThunksTypes => {
   return async (dispatch) => {
      const indexOf = favoriteDishes.indexOf(dishId);
      const updatedDishes = [...favoriteDishes];

      if (indexOf === -1) {
         updatedDishes.push(dishId);
         dish && dispatch(actions.addFavoriteDish(dish));
      } else {
         updatedDishes.splice(indexOf, 1);
         dispatch(actions.removeFavoriteDish(dishId));
      }
      dispatch(actions.setFavouriteDishes(updatedDishes))

      localStorage.setItem(favouriteDishesKey, JSON.stringify(updatedDishes));
   };
};

export const requireHomePgeDishes = (favoriteDishIds = [] as number[]): ThunksTypes => {
   return async (dispatch) => {
      const response = await dishApi.getHomePaheDishes(favoriteDishIds);

      if (response?.status === successStatus) {
         dispatch(actions.setHomePageDishes(response.data));
      }
   };
};

export default dishReducer;