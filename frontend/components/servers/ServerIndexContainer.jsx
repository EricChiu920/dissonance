import { connect } from 'react-redux';
import ServerIndex from './ServerIndex';
import { fetchAllServers } from '../../actions/serverActions';

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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex);
