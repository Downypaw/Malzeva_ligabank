import React from 'react';
import ConverterForm from '../converter-form/converter-form';
import History from '../history/history';

export default function Converter() {
  return (
    <div className="converter">
      <div className="container">
        <ConverterForm />
        <History />
      </div>
    </div>
  );
}
