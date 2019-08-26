import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelTitle from './ChannelTitle';
import { openModal } from '../../actions/modalActions';

const mapStateToProps = (state, ownProps) => {
  const { match: { params: { serverId, channelId }, url } } = ownProps;
  const { session: { id: userId }, entities: { servers, channels } } = state;
  let server = servers[serverId];
  const channel = channels[channelId];

  if (url.split('/')[2] === '@me') {
    server = {};
  }

  return {
    userId,
    server,
    channel,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelTitle));
