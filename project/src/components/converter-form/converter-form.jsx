import React from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from 'date-fns/subDays'
import CurrencySelection from '../currency-selection/currency-selection';
import {Currency} from '../../const';
import {fetchRates} from '../../store/api-action';
import {addResult} from '../../store/action';
import {getRates, getDataStatus} from '../../store/selectors';
import {formatDate, formatHistoryDate, formatNumber} from '../../util';

export default function ConverterForm() {
  const [convertingDate, setConvertingDate] = useState(new Date());
  const [initialCurrency, setInitialCurrency] = useState('');
  const [resultCurrency, setResultCurrency] = useState('');
  const [firstCode, setFirstCode] = useState(Currency.RUB);
  const [secondCode, setSecondCode] = useState(Currency.USD);
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const isDataLoaded = useSelector(getDataStatus);

  const onDateChange = (date) => {
    setConvertingDate(date);
    dispatch(fetchRates(formatDate(date)));
    if (isDataLoaded) {
      setResultCurrency(convertResultCurrency(initialCurrency, secondCode, firstCode));
    }
  };

  const convertInitialCurrency = (amount, currencyCode1, currencyCode2) => {
    let result = 0;
    if (currencyCode1 === Currency.USD && currencyCode2 === Currency.USD) {
      result = Number(amount);
    } else if (currencyCode1 === Currency.USD) {
      result = amount * rates[currencyCode2];
    } else if (currencyCode2 === Currency.USD) {
      result = amount / rates[currencyCode1];
    } else {
      const crossQuote = rates[currencyCode2] / rates[currencyCode1];
      result = amount * crossQuote;
    }

    return formatNumber(result);
  };

  const convertResultCurrency = (amount, currencyCode1, currencyCode2) => {
    let result = 0;
    if (currencyCode1 === Currency.USD && currencyCode2 === Currency.USD) {
      result = Number(amount);
    } else if (currencyCode1 === Currency.USD) {
      result = amount / rates[currencyCode2];
    } else if (currencyCode2 === Currency.USD) {
      result = amount * rates[currencyCode1];
    } else {
      const crossQuote = rates[currencyCode1] / rates[currencyCode2];
      result = amount * crossQuote;
    }

    return formatNumber(result);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addResult({
      date: String(formatHistoryDate(convertingDate)),
      initialValue: String(initialCurrency) + ' ' + firstCode,
      resultValue: String(resultCurrency) + ' ' + secondCode,
    }));
  };

  const onInitialCurrencyInput = (evt) => {
    setInitialCurrency(evt.target.value);
    setResultCurrency(convertInitialCurrency(evt.target.value, firstCode, secondCode));
  };

  const onFirstCurrencyChange = (code) => {
    setFirstCode(code);
    setResultCurrency(convertInitialCurrency(initialCurrency, code, secondCode));
  }

  const onResultCurrencyInput = (evt) => {
    setResultCurrency(evt.target.value, secondCode);
    setInitialCurrency(convertResultCurrency(evt.target.value, firstCode, secondCode));
  };

  const onSecondCurrencyChange = (code) => {
    setSecondCode(code);
    setResultCurrency(convertResultCurrency(initialCurrency, code, firstCode));
  }

  return (
    <>
      <h2 className="converter__name">Конвертер валют</h2>
      <form  className="converter-form" method="get" name="converter-form" onSubmit={onFormSubmit}>
        <fieldset className="converter-form__group converter-form__group--property">
          <label className="converter-form__label" htmlFor="property-amount">У меня есть</label>
          <input
            className="converter-form__amount"
            type="number"
            name="amount-field"
            id="property-amount"
            value={initialCurrency}
            onInput={onInitialCurrencyInput}
            disabled={!isDataLoaded}
          />
          <CurrencySelection
            defaultOption={firstCode}
            onCurrencyChange={onFirstCurrencyChange}
          />
        </fieldset>
        <fieldset className="converter-form__group converter__group--need">
          <label className="converter-form__label" htmlFor="need-amount">Хочу приобрести</label>
          <input
            className="converter-form__amount"
            type="number"
            name="amount-field"
            id="need-amount"
            value={resultCurrency}
            onInput={onResultCurrencyInput}
            disabled={!isDataLoaded}
          />
          <CurrencySelection
            defaultOption={secondCode}
            onCurrencyChange={onSecondCurrencyChange}
          />
        </fieldset>
        <div className="converter-form__datepicker">
          <DatePicker
          selected={convertingDate}
          onChange={onDateChange}
          minDate={subDays(new Date(), 7)}
          maxDate={new Date()}
          dateFormat="d.MM.yyy"
          />
        </div>
        <div className="converter-form__saving">
          <button
            className="converter-form__saving-button"
            type="submit"
            disabled={!initialCurrency || !resultCurrency}
          >
            Сохранить результат
          </button>
        </div>
      </form>
    </>
  );
}
