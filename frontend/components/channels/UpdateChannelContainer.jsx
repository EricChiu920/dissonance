import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelForm from './ChannelForm';
import { updateChannel, deleteChannel } from '../../actions/channelActions';
import { closeModal } from '../../actions/modalActions';

const mapStateToProps = (state, ownProps) => {
  const { location: { pathname } } = ownProps;
  const { entities: { channels } } = state;
  const channelId = pathname.split('/')[3];

  const channel = channels[channelId];

  return {
    channel,
    formType: 'Update Channel',
  };
};

const mapDispatchToState = (dispatch) => {
  return {
    processForm: channel => dispatch(updateChannel(channel)),
    closeModal: () => dispatch(closeModal()),
    deleteChannel: channel => dispatch(deleteChannel(channel)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToState)(ChannelForm));
