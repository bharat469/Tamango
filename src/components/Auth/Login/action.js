import * as actionType from './constant';

export const saveToken = payload => {
  return {
    type: actionType.SAVE_TOKEN,
    payload: payload,
  };
};

export const deleteToken = payload => {
  return {
    type: actionType.DELETE_TOKEN,
  };
};
