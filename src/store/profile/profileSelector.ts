import { AppStateType } from "../store";

export const getIsAuthorized = (state: AppStateType) => {
   return state.profile.isAuthorized;
};

export const getNotificationsCount = (state: AppStateType) => {
   return state.profile.notificationsCount;
};