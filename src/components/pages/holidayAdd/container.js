import {connect} from 'react-redux';
import View from './view';
import {holidaysActions} from '../../../redux/holidays';

const mapStateToProps = (state) => {
  return {
    loading: state.holidays.loading,
    country: state.country,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addHoliday: (data) => dispatch(holidaysActions.addHoliday(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
