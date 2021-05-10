import {createStore} from 'redux';

const initialState = {
    amount : '312.99',
    currencyCode : 'EUR'
}

function reducer( state = initialState , action){
    if (action.type === "amountChanged") {
        return {...state , amount: action.payload};
    }
    if(action.type === "currencycodeChanged" ){
        return {...state , currencyCode : action.payload};
    }
    return state;
}

export const Store = (createStore(reducer));