import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { profileApi } from '../../api/profileApi';
import { successStatus } from '../../api/api';
import { ThunkAction } from 'redux-thunk';
import { setNotificationsCount } from '../notification/notificationReducer';

const SET_IS_AUTHORIZED = 'auth/SET_IS_AUTHORIZED';

const initialState = {
   isAuthorized: Boolean(localStorage.getItem('access_token')),
};

type StateType = typeof initialState;

const profileReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case SET_IS_AUTHORIZED: {
         return {
            ...state,
            isAuthorized: action.isAuthorized,
         };
      }

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setIsAuthorized: (isAuthorized: boolean) => { return { type: SET_IS_AUTHORIZED, isAuthorized, } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const login = (initData: string): ThunksTypes => {
   return async (dispatch) => {
      const response = await profileApi.telegramAppLogin(initData);

      if (response?.status === successStatus) {
         dispatch(setNotificationsCount(response.data?.notificationsCount || 0))
         dispatch(actions.setIsAuthorized(true));
      }
   };
};
export default profileReducer;