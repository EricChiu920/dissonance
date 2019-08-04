import React from 'react';

const ServerIndexItem = ({ server: { name } }) => {
  

  return (
    <li className="server-index-list-item">
      {name}
      <button type="button"></button>
    </li>
  );
};

export default ServerIndexItem;
