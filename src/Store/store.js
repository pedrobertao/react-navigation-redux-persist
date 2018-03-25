import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import loginReducer from './Reducers/login';
import navigationReducer from './Reducers/navigation';

const middlewareNavigation = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);

const rootReducers = combineReducers({
    login: loginReducer,
    nav: navigationReducer
})

const persistConfig = {
    key: 'root',
    storage,
    blaclist: ['login']
}

const reducerPersist = persistReducer(persistConfig, rootReducers);

export const store = createStore(reducerPersist);
export const persistor = persistStore(store);
