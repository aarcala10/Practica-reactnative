import {connect} from 'react-redux';
import View from './view';
import {holidaysActions} from '../../../redux/holidays';
import {holidays} from '../../../redux';

const mapStateToProps = (state) => {
  return {
    loading: state.holidays.loading,
    holidaysList: state.holidays.list,
    total: state.holidays.total,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchHolidays: () => dispatch(holidaysActions.fetchHolidays()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
