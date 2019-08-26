@servers.each do |server|
  unless server.private
    json.set! server.id do
      json.partial! '/api/servers/server', server: server, users: server.users
    end
  end

  current_user.servers.each do |server|
    if server.private
      json.set! server.id do
        json.partial! '/api/servers/server', server: server, users: false
        json.channelId server.channels.first.id
      end
    end
  end
end
