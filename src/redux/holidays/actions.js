import * as types from './types';
import {Alert} from 'react-native';
import * as api from '../../api';

export const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading},
  };
  return action;
};

export const fetchHolidays = () => {
  return async (dispatch, getState) => {
    const country = getState().countries.item;

    if (!country) {
      Alert.alert('Country don´t exist');
      return;
    }
    try {
      dispatch(setLoading(true));
      const getHolidaysRes = await api.getHolidays(country.code);
      //console.log('getHolidaysRes: ', getHolidaysRes);
      const list = getHolidaysRes.data.holidays;

      dispatch(updateList(list));
    } catch (e) {
      Alert.alert('Alert', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export function updateList(list, total) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list, total},
  };
  return action;
}
