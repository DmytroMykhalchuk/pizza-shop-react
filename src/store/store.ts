import appReducer from './app/appReducer';
import cartReducer from './cart/cartReducer';
import categoryReducer from './category/categoryReducer';
import dishReducer from './dish/dishReducer';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import orderReducer from './order/orderReducer';
import profileReducer from './profile/profileReducer';
import notificationReducer from './notification/notificationReducer';

let rootReducer = combineReducers({
   app: appReducer,
   category: categoryReducer,
   dish: dishReducer,
   cart: cartReducer,
   order: orderReducer,
   profile: profileReducer,
   notification: notificationReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

export type AppDispatch = typeof store.dispatch

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>
