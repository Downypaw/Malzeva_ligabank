import {createReducer} from '@reduxjs/toolkit';
import {addResult, loadRates, setDefaultStatus, clearHistory} from './action';
import {MAX_RECORD_COUNT} from '../const';

const initialState = {
  records: [],
  rates: {},
  isDataLoaded: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addResult, (state, action) => {
      if (state.records.length === MAX_RECORD_COUNT) {
        state.records = state.records.slice(0, state.records.length - 1);
      }
      state.records = [action.payload, ...state.records];
    })
    .addCase(loadRates, (state, action) => {
      state.rates = {
        RUB: action.payload.rates.RUB,
        EUR: action.payload.rates.EUR,
        GBP: action.payload.rates.GBP,
        CNY: action.payload.rates.CNY,
      };
      state.isDataLoaded = true;
    })
    .addCase(setDefaultStatus, (state, action) => {
      state.isDataLoaded = false;
    })
    .addCase(clearHistory, (state, action) => {
      state.records = [];
    });
});

export {reducer};
