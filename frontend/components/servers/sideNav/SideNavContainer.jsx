import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNav from './SideNav';
import { userServerNamesSelector, userCreatedServersSelector } from '../../../reducers/serverReducers/serverReducers';
import { openModal } from '../../../actions/modalActions';
import { deleteServer } from '../../../actions/serverActions';

const mapStateToProps = (state, ownProps) => {
  const serverNames = userServerNamesSelector(state);
  const createdServers = userCreatedServersSelector(state);
  const { location: { pathname } } = ownProps;
  const path = pathname.split('/')[2].toLowerCase();

  return {
    serverNames,
    createdServers,
    path,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
    deleteServer: server => dispatch(deleteServer(server)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNav));
