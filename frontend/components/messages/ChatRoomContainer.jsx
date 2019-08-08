import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import { channelMessagesSelector } from '../../reducers/messageReducers/messageReducer';
import { receiveMessage } from '../../actions/messageActions';

const mapStateToProps = (state, ownProps) => {
  const { channelId } = ownProps;
  const messageHistory = channelMessagesSelector(state, channelId);

  return {
    messageHistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
