import React, { useState } from "react";
import Axios from "axios";
import Button from "../../components/button";

import CurrencyStyle from "./style";

const Currency = () => {
  const [objExchange, setObjExchange] = useState(null);

  const [inputVal, setInputVal] = useState(0);
  const [outputVal, setOutputVal] = useState(0);

  const [inputCurrency, setInputCurrency] = useState("USD");
  const [outputCurrency, setOutputCurrency] = useState("USD");

  const calculate = (currency, rates) => {
    let exportVaalue = inputVal * rates[currency];
    setOutputVal(exportVaalue.toFixed(2));
  };

  const handleClickExchange = async currency => {
    let res = await Axios.get(
      `https://api.exchangeratesapi.io/latest?base=${currency}`
    );

    if (res.status === 200) {
      setObjExchange(res.data);
      setInputCurrency(currency);
      // console.log({ base: res.data.base, to: outputCurrency });
      calculate(outputCurrency, res.data.rates);
    } else {
      console.log("Opps! something went wrong", { res });
    }
  };

  const handleClickOutput = currency => {
    if (!objExchange) {
      console.log("No objExchange data");
      return;
    }

    setOutputCurrency(currency);
    // console.log({ base: objExchange.base, to: currency });
    calculate(currency, objExchange.rates);
  };

  return (
    <CurrencyStyle>
      <div className="currency-container">
        <div className="currency-form">
          <h2>Input</h2>
          <input
            type="number"
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
          />

          <div>
            <Button
              active={inputCurrency === "USD"}
              onClick={e => handleClickExchange("USD")}
              name="USD"
            />
            <Button
              active={inputCurrency === "THB"}
              onClick={e => handleClickExchange("THB")}
              name="THB"
            />
            <Button
              active={inputCurrency === "JPY"}
              onClick={e => handleClickExchange("JPY")}
              name="JPY"
            />
            <Button
              active={inputCurrency === "EUR"}
              onClick={e => handleClickExchange("EUR")}
              name="EUR"
            />
          </div>
        </div>

        <div className="currency-form">
          <h2>Output</h2>
          <input disabled type="text" value={outputVal} />

          <div>
            <Button
              active={outputCurrency === "USD"}
              onClick={e => handleClickOutput("USD")}
              name="USD"
            />
            <Button
              active={outputCurrency === "THB"}
              onClick={e => handleClickOutput("THB")}
              name="THB"
            />
            <Button
              active={outputCurrency === "JPY"}
              onClick={e => handleClickOutput("JPY")}
              name="JPY"
            />
            <Button
              active={outputCurrency === "EUR"}
              onClick={e => handleClickOutput("EUR")}
              name="EUR"
            />
          </div>
        </div>
      </div>
    </CurrencyStyle>
  );
};

export default Currency;
