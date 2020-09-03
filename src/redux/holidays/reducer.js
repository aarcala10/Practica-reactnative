import * as types from './types';

const initialState = {
  loading: false,
  list: [],
  total: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};
    case types.UPDATE_LIST:
      return {
        ...state,
        list: action.payload.list,
        total: null,
      };
    default:
      return state;
  }
};

export default reducer;
