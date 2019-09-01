import React from 'react';

class ServerForm extends React.Component {
  constructor(props) {
    super(props);
    const { server } = this.props;

    this.state = server;

    this.handleSubmit = this.handleSubmit.bind(this);
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
    const { processForm, closeModal } = this.props;
    processForm(this.state);
    closeModal();
  }

  render() {
    const { name } = this.state;
    const { closeModal, formType, update } = this.props;
    const formTitle = update ? 'Edit Server' : 'Create your Server';
    const formBody = update ? 'Edit the name of your server, or delete it.' : (
      'By creating a server, you will have access to free voice and text chat to use amongst your friends.'
    );
    const deleteServerButton = update ? <button className="delete-button server-delete" type="button">Delete Server</button> : null;

    return (
      <div className="create-server-form-container">
        <div className="create-server-form-message">
          <h3>{formTitle}</h3>
          <p>{formBody}</p>
        </div>
        <div className="create-form-circle">
          <form className="create-server-form" onSubmit={this.handleSubmit}>
            <label htmlFor="serverName">
              SERVER NAME
              <input onChange={this.handleInput('name')} type="text" value={name} placeholder="Enter a server name" required />
            </label>
          </form>
          <div className="blue-circle" />
        </div>
        <div className="create-server-buttons">
          <button onClick={closeModal} type="button">
            <span className="left-arrow">&larr;</span>
            BACK
          </button>
          {deleteServerButton}
          <button onClick={this.handleSubmit} type="button">{formType}</button>
        </div>
      </div>
    );
  }
}

export default ServerForm;
