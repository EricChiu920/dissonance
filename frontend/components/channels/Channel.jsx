import React from 'react';

class Channel extends React.Component {
  componentDidMount() {
  }

  render() {
    const { channel } = this.props;

    return (
      <li>
        {channel.name}
      </li>
    );
  }
}

export default Channel;
