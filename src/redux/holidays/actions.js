import * as types from './types';
import {Alert} from 'react-native';
import * as api from '../../api';
import {Actions} from 'react-native-router-flux';

const ITEMS_PER_PAGE = 6;

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

export function updateList(list) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list},
  };
  return action;
}

export const addHoliday = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const newHoliday = {
        name: data.name,
        date: data.date,
        country: data.country,
      };
      const {list} = getState().holidays;
      const newList = [newHoliday, ...list];
      console.log('new holiday saved', newHoliday);
      dispatch(updateList(newList));

      //dispatch(initList());
      Alert.alert('Genial', `${data.name} creado!`, [
        {text: 'Aceptar', onPress: () => Actions.pop()},
      ]);
    } catch (e) {
      Alert.alert('Alert', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
