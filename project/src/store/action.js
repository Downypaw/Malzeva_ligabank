import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_RESULT: '/addResult',
  LOAD_RATES: '/loadRates',
  CLEAR_HISTORY: '/clearHistory',
  SET_DEFAULT: '/setDefault',
};

export const loadRates = createAction(ActionType.LOAD_RATES, (result) => ({
  payload: result,
}));

export const addResult = createAction(ActionType.ADD_RESULT, (result) => ({
  payload: result,
}));

export const setDefaultStatus = createAction(ActionType.SET_DEFAULT);

export const clearHistory = createAction(ActionType.CLEAR_HISTORY);
