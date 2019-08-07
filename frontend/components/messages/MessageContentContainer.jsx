import { connect } from 'react-redux';
import MessageContent from './MessageContent';
import { fetchChannel } from '../../actions/channelActions';
import { openModal } from '../../actions/modalActions';

const mapStateToProps = (state, ownProps) => {
  const { channelId } = ownProps;

  return {
    channelId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchChannel: channel => dispatch(fetchChannel(channel)),
    openModal: modal => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContent);
