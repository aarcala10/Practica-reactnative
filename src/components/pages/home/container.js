import {connect} from 'react-redux';
import View from './view';
import {countriesActions} from '../../../redux/countries';

const mapStateToProps = (state) => {
  return {
    countriesList: state.countries.list,
    loading: state.countries.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountries: () => dispatch(countriesActions.fetchCountries()),
    setCountrySelected: (country) =>
      dispatch(countriesActions.setItem(country)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
