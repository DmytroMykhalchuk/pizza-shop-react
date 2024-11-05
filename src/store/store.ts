import appReducer from './app/appReducer';
import cartReducer from './cartReducer/cartReducer';
import categoryReducer from './category/categoryReducer';
import dishReducer from './dish/dishReducer';
import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';

let rootReducer = combineReducers({
   app: appReducer,
   category: categoryReducer,
   dish: dishReducer,
   cart: cartReducer,
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
