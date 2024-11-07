import { AppStateType } from "../store";

export const getOrders = (state: AppStateType) => {
   return state.order.orders;
};

export const getOrder = (state: AppStateType) => {
   return state.order.order
};
