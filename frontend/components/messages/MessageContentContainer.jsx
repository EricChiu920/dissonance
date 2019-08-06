import { connect } from 'react-redux';
import MessageContent from './MessageContent';
import { fetchChannel } from '../../actions/channelActions';
import { openModal } from '../../actions/modalActions';

const mapStateToProps = (state, ownProps) => {
  const { entities: { channels }, session: { id: userId } } = state;
  const { channelId } = ownProps;
  const channel = channels[channelId] || {};

  return {
    channel,
    userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: channel => dispatch(fetchChannel(channel)),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContent);
