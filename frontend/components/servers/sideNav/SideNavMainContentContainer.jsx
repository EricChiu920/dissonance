import { connect } from 'react-redux';
import SideNavMainContent from './SideNavMainContent';
import { fetchServer, deleteServer } from '../../../actions/serverActions';
import { userCreatedServersSelector } from '../../../reducers/serverReducers/serverReducers';

const mapStateToProps = (state, ownProps) => {
  const createdServers = userCreatedServersSelector(state);
  const { match: { params: { channelId, serverId } } } = ownProps;
  const { entities: { servers } } = state;
  const server = servers[serverId];

  return {
    createdServers,
    channelId,
    serverId,
    server,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteServer: server => dispatch(deleteServer(server)),
    fetchServer: serverId => dispatch(fetchServer(serverId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNavMainContent);
