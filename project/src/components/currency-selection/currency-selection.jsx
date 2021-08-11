import React from 'react';
import {Currency} from '../../const';
import PropTypes from 'prop-types';

export default function CurrencySelection({defaultOption, onCurrencyChange}) {
  return (
    <select
      className="converter-form__currency"
      defaultValue={defaultOption}
      onChange={(evt) => onCurrencyChange(evt.target.value)}
    >
      {Object.values(Currency)
        .map((currencyCode) => (<option className="converter-form__currency-option" value={`${currencyCode}`} key={currencyCode}>
          {currencyCode}
        </option>))}
    </select>
  );
}

 CurrencySelection.propTypes = {
   defaultOption: PropTypes.string.isRequired,
 }
