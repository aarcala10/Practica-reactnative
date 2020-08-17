import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
  //No se como meterle los params con axios...
  params: {
    //key: '7ceda30a-0c14-4e2d-881b-2e8b61251413',
  },
});

export const getCountries = () => {
  const url = '/countries?key=7ceda30a-0c14-4e2d-881b-2e8b61251413';
  return instance.get(url);
};

export const getHolidays = () => {
  const url = '/holidays?key=7ceda30a-0c14-4e2d-881b-2e8b61251413';
  return instance.get(url);
};
