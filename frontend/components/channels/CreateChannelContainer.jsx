import { connect } from 'react-redux';
import { createChannel } from '../../actions/channelActions';
import { closeModal } from '../../actions/modalActions';
import CreateChannel from './CreateChannel';

const mapDispatchToState = (dispatch) => {
  return {
    createChannel: channel => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToState)(CreateChannel);
