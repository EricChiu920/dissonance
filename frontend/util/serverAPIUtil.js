export const fetchAllServers = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/servers',
  });
};

export const fetchServer = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/servers/${id}`,
  });
};

export const createServer = (server) => {
  return $.ajax({
    method: 'POST',
    url: '/api/servers',
    data: {
      server,
    },
  });
};

export const updateServer = (server) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/servers/${server.id}`,
    data: {
      server,
    },
  });
};

export const deleteServer = (server) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/servers/${server.id}`,
    data: {
      server,
    },
  });
};
