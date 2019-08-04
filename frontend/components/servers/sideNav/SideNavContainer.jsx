import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav';
import { userServerNamesSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal } from '../../../actions/modalActions';
import { deleteServer } from '../../../actions/serverActions';

const mapStateToProps = (state) => {
  const serverNames = userServerNamesSelector(state);

  return {
    serverNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    deleteServer: server => dispatch(deleteServer(server)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
