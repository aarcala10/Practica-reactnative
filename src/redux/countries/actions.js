import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export function updateList(newList) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: newList},
  };
  return action;
}

export const setItem = (item) => {
  const action = {
    type: types.SET_ITEM,
    payload: {item},
  };
  return action;
};

const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading},
  };
  return action;
};

export const fetchCountries = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const getCountriesRes = await api.getCountries();
      const list = getCountriesRes.data.countries;
      dispatch(updateList(list));
    } catch (e) {
      Alert.alert('Alert', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
