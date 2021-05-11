import { createStore , combineReducers, applyMiddleware}  from 'redux';
import  thunk  from 'redux-thunk';
import { ratesReducer } from './rates';
import { userReducer } from './user';

export const Store = (createStore(
    combineReducers({
        user : userReducer,
        rates : ratesReducer
    }),
    applyMiddleware(thunk)
    ));

//state.amount -> state.rates.amount
