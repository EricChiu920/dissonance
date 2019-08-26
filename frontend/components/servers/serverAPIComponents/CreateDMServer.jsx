import React from 'react';
import { connect } from 'react-redux';

/* global App */
// App defined from rails in cable.js

class CreateDMServer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name } = this.state;
    const { currentUserId } = this.props;

    App.DMServer.createDMServer({
      name,
      private: true,
      userId: currentUserId,
    });
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  render() {
    const { name } = this.state;
    const { serverErrors } = this.props;

    const serverErrorsList = serverErrors.map((error) => {
      return <li className="server-error-message" key={error}>{error}</li>;
    });

    return (
      <form onSubmit={this.handleSubmit} className="dm-server-form">
        <input onChange={this.handleInput} type="text" value={name} />
        <p>Enter a user you want to Direct Message</p>
        <ul className="server-error-list">
          {serverErrorsList}
        </ul>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  const { session: { id }, errors: { server: serverErrors } } = state;

  return {
    currentUserId: id,
    serverErrors,
  };
};

export default connect(mapStateToProps)(CreateDMServer);
