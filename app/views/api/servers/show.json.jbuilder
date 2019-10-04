json.server do
  json.partial! '/api/servers/server', server: @server, users: @server.users
  json.ownerId @server.owner.id
  json.channels @server.channels.pluck(:id)
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do
      json.extract! channel, :name, :id
      json.serverId channel.server_id
      json.messageIds channel.messages.ids
      json.ownerId @server.id
    end
  end
end