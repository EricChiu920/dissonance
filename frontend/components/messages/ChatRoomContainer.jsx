import { connect } from 'react-redux';
import ChatRoom from './ChatRoom';
import { channelMessagesSelector } from '../../reducers/messageReducers/messageReducer';
import { receiveMessage } from '../../actions/messageActions';
import { fetchUser } from '../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  const { channelId } = ownProps;
  const { entities: { users } } = state;
  const messageHistory = channelMessagesSelector(state, channelId);

  return {
    messageHistory,
    users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message)),
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
