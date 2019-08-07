import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MessageForm from './MessageForm';

const mapStateToProps = (state, ownProps) => {
  const { session: { id: userId } } = state;
  const { match: { params: { channelId } } } = ownProps;

  return {
    userId,
    channelId,
  };
};

export default withRouter(connect(mapStateToProps)(MessageForm));
