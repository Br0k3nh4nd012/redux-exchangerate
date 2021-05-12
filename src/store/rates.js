const initialState = {
    amount : '312.99',
    currencyCode : 'EUR',
    currencyData :{ USD : { displayLabel : "US Dollars" ,code : "USD" , rate : 1.0 } },
    supportedCurrencies : ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"]
}

export function ratesReducer( state = initialState, action){
    if (action.type === "rates/amountChanged") {
        return {...state , amount: action.payload};
    }
    if(action.type === "rates/currencycodeChanged" ){
        return {...state , currencyCode : action.payload};
    }
    if(action.type === "rates/labelRecieved"){
        const { displayLabel , currencyCode } = action.payload;
        return {
            ...state,
            currencyData : {
                ...state.currencyData ,
                [currencyCode] : {
                    ...state.currencyData[currencyCode],
                    displayLabel : displayLabel,
                }
            }
        }
    }
    if(action.type === "rates/recieved"){
        const rates = Object.keys(action.payload).concat(state.currencyCode);
        const currencyData = {};
        for (let code in action.payload){
            currencyData[code] = ({ code , rate:action.payload[code]} );
        }
        return {...state , currencyData, supportedCurrencies:rates};
    }
    return state;
}

//selectors

export const getAmount = state => state.rates.amount; 
export const getCurrencyCode = state => state.rates.currencyCode; 
export const getCurrencyData = state => state.rates.currencyData;
export const getSupportedCurrencies = state => state.rates.supportedCurrencies;
export const getDisplayLabel = (state , currencyCode) => {
    const match = state.rates.currencyData.find((data) => data.code === currencyCode);
    if( match ) return match.displayLabel;
}

//action types
export const AMOUNT_CHANGED = "rates/amountChanged";
export const CURRENCY_CODE_CHANGED = "rates/currencycodeChanged";
export const CURRENCY_DATA_RECIEVED= "rates/recieved";

//action Creators
export const changeAmount = (amount) => {
    return (
        {
            type: AMOUNT_CHANGED,
            payload : amount,
        }
    )
};
export function changeCurrencyCode(currencyCode){
    return function changeCurrencyCodeThunk(dispatch){
        dispatch({
            type: CURRENCY_CODE_CHANGED,
            payload: currencyCode
        });
        const rates = {
            EUR : 20.0,
            JPY : 30.0,
            CAD : 40.0,
            GBP : 27.0,
            MXN : 17.0,
          }
        dispatch({
            type : CURRENCY_DATA_RECIEVED,
            payload : rates
        })
    }        
};


//thunks
export function getInitialRates(dispatch , getState) {
    const state = getState();
    const currencyCode = getCurrencyCode(state);
    dispatch(changeCurrencyCode(currencyCode));
}