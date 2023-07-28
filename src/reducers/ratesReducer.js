import { FETCH_RATES_REQUEST, FETCH_RATES_SUCCESS, FETCH_RATES_FAILURE } from '../actions/blogsApiActions';

const initialState = {
  rates: [],
  loadingRates: false,
  errorRates: null,
};

const ratesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RATES_REQUEST:
      return {
        ...state,
        loadingRates: true,
      };
    case FETCH_RATES_SUCCESS:
      return {
        ...state,
        loadingRates: false,
        rates: action.payload,
      };
    case FETCH_RATES_FAILURE:
      return {
        ...state,
        loadingRates: false,
        errorRates: action.payload,
      };
    default:
      return state;
  }
};

export default ratesReducer;