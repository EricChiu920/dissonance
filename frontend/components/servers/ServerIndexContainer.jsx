import { connect } from 'react-redux';
import ServerIndex from './ServerIndex';
import { fetchAllServers, joinServer, leaveServer } from '../../actions/serverActions';

const mapStateToProps = (state) => {
  const { entities: { servers, users }, session: { id } } = state;
  const { joinedServers } = users[id];

  return {
    servers: Object.values(servers),
    joinedServers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllServers: () => dispatch(fetchAllServers()),
    joinServer: server => dispatch(joinServer(server)),
    leaveServer: server => dispatch(leaveServer(server)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
