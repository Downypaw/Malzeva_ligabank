import React from 'react';
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import subDays from 'date-fns/subDays'
import CurrencySelection from '../currency-selection/currency-selection';
import {Currency} from '../../const';

export default function ConverterForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <h2 className="converter__name">Конвертер валют</h2>
      <form  className="converter-form" method="get" name="converter-form">
        <fieldset className="converter-form__group converter-form__group--property">
          <label className="converter-form__label" htmlFor="property-amount">У меня есть</label>
          <input className="converter-form__amount" type="number" name="amount-field" id="property-amount"/>
          <CurrencySelection defaultOption={Currency.RUB}/>
        </fieldset>
        <fieldset className="converter-form__group converter__group--need">
          <label className="converter-form__label" htmlFor="need-amount">Хочу приобрести</label>
          <input className="converter-form__amount" type="number" name="amount-field" id="need-amount"/>
          <CurrencySelection defaultOption={Currency.USD}/>
        </fieldset>
        <div className="converter-form__datepicker">
          <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          minDate={subDays(new Date(), 7)}
          maxDate={new Date()}
          dateFormat="d.MM.yyy"
          />
        </div>
        <div className="converter-form__saving">
          <button className="converter-form__saving-button" type="submit">Сохранить результат</button>
        </div>
      </form>
    </>
  );
}
