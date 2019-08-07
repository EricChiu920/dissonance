import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import { channelMessagesSelector } from '../../reducers/messageReducers/messageReducer';

const mapStateToProps = (state, ownProps) => {
  const { channelId } = ownProps;
  const messageHistory = channelMessagesSelector(state, channelId);

  return {
    messageHistory,
  };
};

export default connect(mapStateToProps)(ChatRoom);
