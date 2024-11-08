import { AppStateType } from "../store";

export const getNotifications = (state: AppStateType) => {
   return state.notification.notifications;
};

export const getNotification = (state: AppStateType) => {
   return state.notification.notification;
};

export const getNotificationsCount = (state: AppStateType) => {
   return state.notification.notificationsCount;
};