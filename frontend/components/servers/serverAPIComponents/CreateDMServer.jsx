import React from 'react';
import { createServer } from '../../../actions/serverActions';

class CreateDMServer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={handleSubmit} className="dm-server-form">
        <input type="text" />
        <p>Enter a user you want to Direct Message</p>
      </form>
    );
  }
}

export default CreateDMServer;
