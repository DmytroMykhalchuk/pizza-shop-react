import { AppStateType, InferActionsTypes } from '../store';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FullOrderType, OrderType } from './orderTypes';
import { orderApi } from '../../api/orderApi';
import { successStatus } from '../../api/api';

const SET_ORDER = 'order/SET_ORDER';
const SET_ORDERS = 'order/SET_ORDERS';


const initialState = {
   orders: null as null | OrderType[],
   order: null as null | FullOrderType,
};

type StateType = typeof initialState;

const orderReducer = (state = initialState, action: ActionsTypes): StateType => {
   switch (action.type) {
      case SET_ORDER: {
         return {
            ...state,
            order: action.order,
         };
      }

      case SET_ORDERS: {
         return {
            ...state,
            orders: action.orders,
         };
      }

      default: return state;
   };
};

export type ActionsTypes = InferActionsTypes<typeof actions>;
export type DispatchType = Dispatch<ActionsTypes>;

const actions = {
   setOrders: (orders: OrderType[]) => { return { type: SET_ORDERS, orders, } as const; },
   setOrder: (order: FullOrderType) => { return { type: SET_ORDER, order, } as const; },
};

type ThunksTypes = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const requireOrders = (): ThunksTypes => {
   return async (dispatch) => {
      const response = await orderApi.getOrders();

      if (response?.status === successStatus) {
         dispatch(actions.setOrders(response.data));
      }
   };
};

export const requireOrder = (orderId: number): ThunksTypes => {
   return async (dispatch) => {
      const response = await orderApi.getOrder(orderId);

      if (response?.status === successStatus) {
         dispatch(actions.setOrder(response.data));
      }
   };
};

export default orderReducer;