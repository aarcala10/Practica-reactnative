import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});
const key = '7ceda30a-0c14-4e2d-881b-2e8b61251413';

export const getCountries = () => {
  const url = `/countries?key=${key}`;
  return instance.get(url);
};

export const getHolidays = (countryCode) => {
  const url = `/holidays?key=${key}&country=${countryCode}&year=2019`;
  return instance.get(url);
};
