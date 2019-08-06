json.server do
  json.partial! '/api/servers/server', server: @server, users: @server.users
  json.channels @server.channels.pluck(:id)
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract channel, :name, :owner_id, :server_id, :id
    end
  end
end