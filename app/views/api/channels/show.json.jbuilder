json.channel do
  json.extract! @channel, :name, :id
  json.serverId @channel.server_id
  json.ownerId @channel.owner.id
  json.messageIds @channel.messages.ids
end

json.messages do
  @channel.messages.each do |message|
    json.set! message.id do
      json.partial! '/api/messages/message', message: message
    end
  end
end
