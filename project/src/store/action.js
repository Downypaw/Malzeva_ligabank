import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  ADD_RESULT: '/addResult',
  LOAD_RATES: '/loadRates',
  DELETE_RATES: '/deleteRates',
};

export const addResult = createAction(ActionType.ADD_RESULT, (result) => ({
  payload: result,
}));
