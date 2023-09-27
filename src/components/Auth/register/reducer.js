import * as actiontype from './constant';

const initialState = {
  data: [],
  isSuccess: false,
  isFailure: false,
  isLoading: false,
};

export const RegisterScreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontype.GET_REGISTER_RESPONSE_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };

    case actiontype.GET_REGISTER_RESPONSE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isSuccess: true,
      };

    case actiontype.GET_REGISTER_RESPONSE_FAILURE:
      return {
        ...state,
        isFailure: true,
      };

    default:
      return state;
  }
};
