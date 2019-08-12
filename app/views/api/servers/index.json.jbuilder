@servers.each do |server|
  unless server.private
    json.set! server.id do
      json.partial! '/api/servers/server', server: server, users: server.users
    end
  end
end
