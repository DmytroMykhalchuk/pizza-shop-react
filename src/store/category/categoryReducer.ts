import { AppStateType, InferActionsTypes } from '../store';
import { categoryApi } from '../../api/categoryApi';
import { CategoryType } from './categoryTypes';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

const SET_CATEGORIES = 'category/SET_CATEGORIES';

const initialState = {
   categories: null as null | CategoryType[],
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

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setCategories: (categories: CategoryType[]) => { return { type: SET_CATEGORIES, categories, } as const; },
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

export default categoryReducer;