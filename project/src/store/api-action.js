import {loadRates, setDefaultStatus} from './action';
import {toast} from '../util';

export const fetchRates = (date) => (dispatch, _getState, api) => {
  dispatch(setDefaultStatus());
  return (api.get(`${date}.json?app_id=4b0b8e89594a4f848908530c25dc91c1`)
    .then(({data}) => {
      dispatch(loadRates(data));
    })
    .catch((err) => {
      toast();
    })
)};
