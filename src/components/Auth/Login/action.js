import * as actionType from './constant';
export const saveToken = payload => ({
  type: actionType.SAVE_TOKEN,
  payload: payload,
});
