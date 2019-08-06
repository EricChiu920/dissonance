import React from 'react';
import { withRouter } from 'react-router-dom';

class CreateChannel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.handleInput = this.handleInput.bind(this);
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
    const { location: { pathname }, createChannel } = this.props;
    const serverId = pathname.split('/')[2];
    const { name } = this.state;
    const channel = {
      name,
      server_id: serverId,
    };

    createChannel(channel);
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="channel name">
          Name
          <input onChange={this.handleInput('name')} type="text" value={name} />
        </label>
        <input type="submit" value="Create Channel" />
      </form>
    );
  }
}

export default withRouter(CreateChannel);
