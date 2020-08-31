import * as types from './types';

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

export const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    loading: {loading},
  };
  return action;
};
