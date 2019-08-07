import React from 'react';

const MessageItem = React.forwardRef(({ message: { body } }, ref) => {
  return (
    <li className="message-item" ref={ref}>
      {body}
    </li>
  );
});

export default MessageItem;
