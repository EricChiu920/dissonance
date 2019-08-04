import { connect } from 'react-redux';
import SideNav from './SideNav';
import { userServerNamesSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal } from '../../../actions/modalActions';

const mapStateToProps = (state) => {
  const serverNames = userServerNamesSelector(state);

  return {
    serverNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNav);
