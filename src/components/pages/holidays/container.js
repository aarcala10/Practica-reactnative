import {connect} from 'react-redux';
import View from './view';
import {holidaysActions} from '../../../redux/holidays';

const mapStateToProps = (state) => {
  return {
    country: state.countries.item,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(View);
