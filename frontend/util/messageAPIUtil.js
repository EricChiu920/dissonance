export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: {
      message,
    },
  });
};

export const updateMessage = (message) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/messages/${message.id}`,
    data: {
      message,
    },
  });
};

export const deleteMessage = (message) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/messages/${message.id}`,
  });
};
