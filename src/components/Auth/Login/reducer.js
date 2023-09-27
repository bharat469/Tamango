import * as actiontype from './constant';

const initialState = {
  token: '',
  isFailure: false,
  isSuccess: false,
  isLoading: false,
};

export const SaveTokenReducer = (state = initialState, action) => {
  console.log('DKHJ', action.payload);
  switch (action.type) {
    case actiontype.SAVE_TOKEN_FAILURE:
      return {
        ...state,
        isLoading: true,
      };

    case actiontype.SAVE_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        isSuccess: true,
      };

    case actiontype.SAVE_TOKEN_FAILURE:
      return {
        ...state,
        isFailure: true,
      };

    default:
      return state;
  }
};
