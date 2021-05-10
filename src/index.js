import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import { Provider } from 'react-redux';
import { Store } from './Store';
import "./style.css";

ReactDOM.render(
<Provider store={Store}>
<ExchangeRate />
</Provider>,
 document.getElementById("root"));
