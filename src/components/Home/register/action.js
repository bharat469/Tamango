import * as actionType from './constant';

export const RegisterData = payload => ({
  type: actionType.GET_REGISTER_RESPONSE,
  payload: payload,
});
