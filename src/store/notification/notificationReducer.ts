import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { successStatus } from '../../api/api';
import { ThunkAction } from 'redux-thunk';
import { FullNotificationType, NotificationType } from './notificationTypes';
import { notificationApi } from '../../api/notificationApi';

const SET_NOTIFICATIONS = 'notification/SET_NOTIFICATIONS';
const SET_NOTIFICATION = 'notification/SET_NOTIFICATION';
const SET_NOTIFICATION_COUNT = 'notification/SET_NOTIFICATION_COUNT';
const DELETE_NOTIFICATION = 'notification/DELETE_NOTIFICATION';

const initialState = {
   notificationsCount: 0 as number,
   notifications: null as null | NotificationType[],
   notification: null as null | FullNotificationType,
};

type StateType = typeof initialState;

const notificationReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case SET_NOTIFICATIONS: {
         return {
            ...state,
            notifications: action.notifications,
         };
      }

      case SET_NOTIFICATION: {
         return {
            ...state,
            notification: action.notification,
         }
      }

      case SET_NOTIFICATION_COUNT: {
         return {
            ...state,
            notificationsCount: action.count,
         };
      }

      case DELETE_NOTIFICATION: {
         return {
            ...state,
            notification: state.notification?.id === action.notificationId
               ? null
               : state.notification,
            notifications: state.notifications?.filter(item => item.id !== action.notificationId) || state.notifications,
         };
      }

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setNotificationsCount: (count: number) => { return { type: SET_NOTIFICATION_COUNT, count, } as const; },
   setNotifications: (notifications: NotificationType[]) => { return { type: SET_NOTIFICATIONS, notifications, } as const; },
   setNotification: (notification: NotificationType) => { return { type: SET_NOTIFICATION, notification, } as const; },
   deleteNotification: (notificationId: number) => { return { type: DELETE_NOTIFICATION, notificationId, } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const setNotificationsCount = (count: number): ThunksTypes => {
   return async (dispatch) => {
      dispatch(actions.setNotificationsCount(count));
   };
};

export const requireNotifications = (): ThunksTypes => {
   return async (dispatch) => {
      const response = await notificationApi.getNotifications();

      if (response?.status === successStatus) {
         dispatch(actions.setNotifications(response.data));
         dispatch(actions.setNotificationsCount(0));
      }
   };
};

export const requireNotification = (notificationId: number): ThunksTypes => {
   return async (dispatch) => {
      const response = await notificationApi.getNotification(notificationId);

      if (response?.status === successStatus) {
         dispatch(actions.setNotification(response.data));
      }
   };
};

export const deleteNotification = (notificationId: number): ThunksTypes => {
   return async (dispatch) => {
      const response = await notificationApi.delete(notificationId);

      if (response?.status === successStatus) {
         dispatch(actions.setNotification(response.data));
      }
   };
};

export default notificationReducer;