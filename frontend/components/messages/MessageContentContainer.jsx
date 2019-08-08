import { connect } from 'react-redux';
import MessageContent from './MessageContent';
import { fetchChannel } from '../../actions/channelActions';
import { openModal } from '../../actions/modalActions';
import { channelMessagesSelector } from '../../reducers/messageReducers/messageReducer';

const mapStateToProps = (state, ownProps) => {
  const { channelId } = ownProps;
  const messageHistory = channelMessagesSelector(state, channelId);

  return {
    channelId,
    messageHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: channel => dispatch(fetchChannel(channel)),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContent);
