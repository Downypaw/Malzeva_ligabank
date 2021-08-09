import {createReducer} from '@reduxjs/toolkit';
import {addResult} from './action';
import {MAX_RECORD_COUNT} from '../const';

const initialState = {
  history: [
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
    {
      date: '25.11.2020',
      initialValue: '1000 RUB',
      resultValue: '13,1234 USD',
    },
  ],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addResult, (state, action) => {
      if (state.history === MAX_RECORD_COUNT) {
        state.history.pop();
      }
      state.history = state.history.unshift(action.payload);
    });
});

export {reducer};
