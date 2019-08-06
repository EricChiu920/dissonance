import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SideNavMainContent from './SideNavMainContent';
import { fetchServer, deleteServer } from '../../../actions/serverActions';
import { userCreatedServersSelector } from '../../../reducers/serverReducers/serverReducers';
import { serverChannelsSelector } from '../../../reducers/channelReducers/channelReducer';
import { openModal } from '../../../actions/modalActions';

const mapStateToProps = (state, ownProps) => {
  const createdServers = userCreatedServersSelector(state);
  const { match: { params: { channelId, serverId } } } = ownProps;
  const { entities: { servers } } = state;
  const server = servers[serverId];
  const channels = serverChannelsSelector(state, serverId);

  return {
    createdServers,
    channelId,
    serverId,
    channels,
    server,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteServer: server => dispatch(deleteServer(server)),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideNavMainContent));
