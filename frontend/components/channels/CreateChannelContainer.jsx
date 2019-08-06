import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelForm from './ChannelForm';
import { createChannel } from '../../actions/channelActions';
import { closeModal } from '../../actions/modalActions';

const mapStateToProps = () => {
  const channel = {
    name: '',
  };

  return {
    channel,
    formType: 'Create Channel',
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    processForm: channel => dispatch(createChannel(channel)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToState)(ChannelForm));
