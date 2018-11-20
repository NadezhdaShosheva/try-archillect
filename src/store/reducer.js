export const initialState = {
  resultImage: '',
  timeLeft: 0,
  hasResult: false,
  hasCounter: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_IMAGE_URL':
      return {
        ...state,
        resultImage: action.imageUrl,
        hasResult: true,
        hasCounter: false,
      };

    case 'IMAGE_DOES_NOT_EXIST':
      return {
        ...state,
        hasResult: true,
        hasCounter: true,
        timeLeft: action.timeLeft,
      };

    case 'DEFAULT_STATE':
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
