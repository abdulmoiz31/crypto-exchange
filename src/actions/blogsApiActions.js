import axios from 'axios';

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const FETCH_RATES_REQUEST = 'FETCH_RATES_REQUEST';
export const FETCH_RATES_SUCCESS = 'FETCH_RATES_SUCCESS';
export const FETCH_RATES_FAILURE = 'FETCH_RATES_FAILURE';

const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchDataFromServer = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    axios
      .get('http://localhost:3000/coinsPurchased')
      .then((response) => {
        const data = response.data;
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};

const fetchRatesRequest = () => ({
  type: FETCH_RATES_REQUEST,
});

const fetchRatesSuccess = (data) => ({
  type: FETCH_RATES_SUCCESS,
  payload: data,
});

const fetchRatesFailure = (error) => ({
  type: FETCH_RATES_FAILURE,
  payload: error,
});

export const fetchRatesFromServer = () => {
  return (dispatch) => {
    dispatch(fetchRatesRequest());

    axios
      .get('http://localhost:3000/rates')
      .then((response) => {
        const data = response.data;
        dispatch(fetchRatesSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchRatesFailure(error.message));
      });
  };
};