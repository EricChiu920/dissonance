import React from 'react';
import { connect } from 'react-redux';
import { createServer } from '../../../actions/serverActions';

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
    const { createServer } = this.props;

    const newServer = Object.assign({}, this.state, { private: true });
    createServer(newServer);
  }

  handleInput(e) {
    this.setState({ name: e.currentTarget.value });
  }

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="dm-server-form">
        <input onChange={this.handleInput} type="text" value={name} />
        <p>Enter a user you want to Direct Message</p>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createServer: server => dispatch(createServer(server)),
  };
};

export default connect(null, mapDispatchToProps)(CreateDMServer);
