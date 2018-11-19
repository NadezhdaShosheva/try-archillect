import * as actionTypes from './actions';

const initialState = {
  resultImage: '',
  period: '',
  hasResult: false,
  hasCounter: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_IMAGE_URL:
      return {
        ...state,
        resultImage: action.imageUrl,
        hasResult: true,
        hasCounter: false,
      };

    case actionTypes.IMAGE_DOES_NOT_EXIST:
      return {
        ...state,
        period: action.period,
        hasResult: true,
        hasCounter: true,
      };

    case actionTypes.DEFAULT_STATE:
      return {
        ...state,
        hasResult: false,
        hasCounter: false,
      };

    default:
      return state;
  }
};

export default reducer;
