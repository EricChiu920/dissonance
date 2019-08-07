import React from 'react';

const ChannelTitle = ({ owner, channelFormModal }) => {
  const editButton = !owner ? null : (
    <button onClick={channelFormModal} type="button" className="channel-edit-button">Edit</button>
  );

  return (
    <>
      {editButton}
    </>
  );
};

export default ChannelTitle;
