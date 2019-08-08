import React from 'react';
import { connect } from 'react-redux';

const formatDate = (dateTime) => {
  let date = dateTime.split('T')[0];
  date = date.split('-');
  const year = date.shift();
  date.push(year);

  return date.join('/');
};

const formatTime = (dateTime) => {
  let time = dateTime.split('T')[1].split('.')[0];
  time = time.split(':');
  let hour = Number(time[0]);
  const minute = time[1];

  let suffix;
  if (hour > 12) {
    hour %= 12;
    suffix = 'PM';
  } else {
    suffix = 'AM';
  }

  return `${hour}:${minute} ${suffix}`;
};

const MessageItem = ({ message: { body, createdAt }, user: { username = '' } }) => {
  return (
    <li className="message-item">
      <div className="message-info">
        <p className="message-username">{username}</p>
        <p className="message-time">{`${formatDate(createdAt)} ${formatTime(createdAt)}`}</p>
      </div>
      <p className="message-text">{body}</p>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { entities: { users } } = state;
  const { message: { authorId } } = ownProps;
  const user = users[authorId];

  return {
    user,
  };
};

export default connect(mapStateToProps)(MessageItem);
