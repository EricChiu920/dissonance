@servers.each do |server|
  unless server.private
    json.set! server.id do
      json.partial! '/api/servers/server', server: server, users: server.users
      json.ownerId server.owner.id
    end
  end

  current_user.servers.each do |server|
    if server.private
      json.set! server.id do
        json.partial! '/api/servers/server', server: server, users: false
        json.ownerId server.owner.id
        json.channelId server.channels.first.id
      end
    end
  end
end
