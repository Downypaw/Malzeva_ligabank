import {loadRates} from './action';

export const loadRates = (date) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer) => adaptOfferToClient(offer)))))
    .catch(() => toast('Не получилось подключиться. Необходимо проверить соединение или перезагрузить страницу', ToastConfiguration.WITHOUT_TIMEOUT))
);
