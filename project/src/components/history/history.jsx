import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getRecords} from '../../store/selectors';
import {clearHistory} from '../../store/action';

export default function History() {
  const records = useSelector(getRecords);
  const dispatch = useDispatch();

  const onClearingButtonClick = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="history">
      <h3 className="history__title">История конвертация</h3>
      <ul className="history__records">
        {records.map((record, index) => (
          <li className="history__record" key={`${record}${index}`}>
            <span className="history__date">{record.date}</span>
            <span className="history__initial-value">{record.initialValue}</span>
            <span className="history__result-value">{record.resultValue}</span>
          </li>
        ))}
      </ul>
      <button className="history__clearing" onClick={onClearingButtonClick}>Очистить историю</button>
    </div>
  );
}
