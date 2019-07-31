import React from 'react';
import SessionFormMessage from './SessionFormMessage';
import OtherFormMessage from './OtherFormMessage';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  updateInput(field) {
    return e => (
      this.setState({
        [field]: e.currentTarget.value,
      })
    );
  }

  render() {
    const { username, email, password } = this.state;
    const { formType } = this.props;

    const usernameField = formType !== 'Signup' ? null : (
      <label htmlFor="username">
        USERNAME
        <input onChange={this.updateInput('username')} type="text" value={username} />
      </label>
    );

    return (
      <div className="session-form">
        <SessionFormMessage formType={formType} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">
            EMAIL
            <input onChange={this.updateInput('email')} type="text" value={email} />
          </label>
          {usernameField}
          <label htmlFor="password">
            PASSWORD
            <input onChange={this.updateInput('password')} type="text" value={password} />
          </label>
          <input type="submit" value={formType} />
        </form>
        <OtherFormMessage formType={formType} />
      </div>
    );
  }
}

export default SessionForm;
