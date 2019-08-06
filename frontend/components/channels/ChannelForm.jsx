import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    const { channel } = this.props;

    this.state = channel;

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteChannel = this.handleDeleteChannel.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { location: { pathname }, processForm, closeModal } = this.props;
    const serverId = pathname.split('/')[2];
    const { name, id } = this.state;
    const channel = {
      id,
      name,
      server_id: serverId,
    };

    processForm(channel);
    closeModal();
  }

  handleDeleteChannel() {
    const { location: { pathname }, deleteChannel, closeModal } = this.props;

    const pathsArray = pathname.split('/');
    const serverId = pathsArray[2];
    const channelId = pathsArray[3];

    const channel = {
      channelId,
      serverId,
    };

    deleteChannel(channel);
    closeModal();
  }

  render() {
    const { name } = this.state;
    const { formType, closeModal } = this.props;
    const header = formType === 'Create Channel' ? 'CREATE TEXT CHANNEL' : 'UPDATE TEXT CHANNEL';
    const deleteButton = formType === 'Create Channel' ? null : (
      <button onClick={this.handleDeleteChannel} className="delete-channel-button" type="button">Delete Channel</button>
    );

    return (
      <form onSubmit={this.handleSubmit} className="channel-form-container">
        <h4>{header}</h4>
        <div className="channel-type">
          <p>CHANNEL TYPE</p>
          <div>
            <em># </em>
            Text Channel
          </div>
        </div>
        <label htmlFor="channel name">
          CHANNEL NAME
          <input onChange={this.handleInput('name')} type="text" value={name} />
        </label>
        <div className="channel-form-buttons">
          {deleteButton}
          <div>
            <button className="cancel-channel-form-button" onClick={closeModal} type="button">Cancel</button>
            <button className="process-form-button" type="submit">{formType}</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ChannelForm;
