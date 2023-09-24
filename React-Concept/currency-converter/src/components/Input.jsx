/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React,{useId} from 'react'

function Input({ 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenceyOption = [],
    setCurrency = "usd",
    amountDisable  = false,
    currencyDisable = false,
    className = ""}) {
    const amountId = useId ();
    console.log(currenceyOption)
    return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor={amountId} className="text-black/40 mb-2 inline-block">
            {label}
          </label>
          <input
            id={amountId}
            value={amount}
            className="outline-none w-full bg-transparent py-1.5"
            type="number"
            placeholder="Amount"
            disabled={amountDisable}
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
            value={setCurrency}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
            disabled={currencyDisable}
          >
            {currenceyOption.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
}

export default Input;
