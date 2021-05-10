import { useState, useCallback, useEffect } from "react";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { useSelector } from 'react-redux';
import { getExchangeRates } from "../api";

const supportedCurrencies = ["USD", "EUR", "JPY", "CAD", "GBP", "MXN"];
export function ExchangeRate() {
  // const [amount, setAmount] = useState("1.50");
  // const [currencyCode, setCurrencyCode] = useState("USD");
  const amount = useSelector((state) => state.amount);
  const currencyCode = useSelector((state) => state.currencyCode);

  // const setAmount = () => {}
  // const setCurrencyCode = () => {}

  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  // fetch the exchange rates each time currency code changes
  useEffect(() => {
    // getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
    //   setCurrencyData(rates);
    // });
    setCurrencyData({
      EUR : 20.0,
      JPY : 30.0,
      CAD : 40.0,
      GBP : 27.0,
      MXN : 17.0,
    });
  }, [currencyCode]);

  // const handleCurrencyCode = useCallback(
  //   (e) => setCurrencyCode(e.target.value),
  //   []
  // );

  // const handleAmountChange = useCallback((e) => {
  //   let newAmount = e.target.value;
  //   setAmount(newAmount);
  // }, []);

  return (
    <>
      <section>
        <h1 className="ExchangeRate-header">
          Exchange Rates{" "}
          <CurrencyCodePicker
            supportedCurrencies={supportedCurrencies}
            currencyCode={currencyCode}            
          />
        </h1>
      </section>
      <section>
        <AmountField amount={amount} />
      </section>
      <section>
        <RateTable currencyData={currencyData} amount={amount} />
      </section>
    </>
  );
}
