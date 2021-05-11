import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import {getInitialRates} from './store/rates';
import "./style.css";

Store.dispatch(getInitialRates);

ReactDOM.render(
<Provider store={Store}>
<ExchangeRate />
</Provider>,
 document.getElementById("root"));
