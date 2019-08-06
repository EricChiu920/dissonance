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
    const { closeModal, formType } = this.props;

    return (
      <div className="create-server-form-container">
        <div className="create-server-form-message">
          <h3>Create your Server</h3>
          <p>By creating a server, you will have access to free voice and text chat to use amongst your friends.</p>
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
          <button onClick={this.handleSubmit} type="button">{formType}</button>
        </div>
      </div>
    );
  }
}

export default ServerForm;
