import { connect } from 'react-redux';
import ServerIndex from './ServerIndex';

const mapStateToProps = (state) => {
  const { entities: { servers, users }, session: { id } } = state;
  const { joinedServers } = users[id];

  return {
    servers: Object.values(servers),
    joinedServers,
  };
};

// const mapDispatchToProps = (dispatch) => {

// }

export default connect(mapStateToProps)(ServerIndex);
