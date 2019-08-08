import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './MessageForm';
import { receiveMessage } from '../../actions/messageActions';

const mapStateToProps = (state, ownProps) => {
  const { session: { id: userId } } = state;
  const { match: { params: { channelId } } } = ownProps;

  return {
    userId,
    channelId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveMessage: message => dispatch(receiveMessage(message)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));
