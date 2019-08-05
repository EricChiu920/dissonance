json.partial! '/api/servers/server', server: @server, users: @server.users
json.channels @server.channels.pluck(:id)