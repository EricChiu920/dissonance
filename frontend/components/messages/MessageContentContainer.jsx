import { connect } from 'react-redux';
import MessageContent from './MessageContent';
import { fetchChannel } from '../../actions/channelActions';
import { channelMessagesSelector } from '../../reducers/messageReducers/messageReducer';

const mapStateToProps = (state, ownProps) => {
  const { channelId, match: { params: { dmId } } } = ownProps;
  const messageHistory = channelMessagesSelector(state, channelId);

  return {
    channelId: channelId || dmId,
    messageHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: channel => dispatch(fetchChannel(channel)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContent);
