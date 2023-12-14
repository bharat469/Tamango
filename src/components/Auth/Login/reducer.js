import * as actiontype from './constant';

const initialState = {
  token: null,
  isFailure: false,
  isSuccess: false,
  isLoading: false,
  isAuthenticate: false,
};

export const SaveTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.SAVE_TOKEN:
      return {
        ...state,
        token: action.payload,
        isSuccess: true,
        isAuthenticate: true,
      };

    case actiontype.DELETE_TOKEN:
      return {
        ...state,
        token: null,
        isAuthenticate: false,
      };

    default:
      return state;
  }
};
