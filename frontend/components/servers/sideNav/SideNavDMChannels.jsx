import React from 'react';

class SideNavDMChannels extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="side-nav-dm-channels">
        <form onSubmit={this.handleSubmit}>
          <input className="dm-input" type="text" placeholder="Find or start a conversation" />
        </form>
        <ul>
          <p>DIRECT MESSAGES</p>
        </ul>
      </div>
    );
  }
}

export default SideNavDMChannels;
