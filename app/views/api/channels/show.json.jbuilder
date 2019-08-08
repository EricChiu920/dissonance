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

json.messageAuthors do
  @channel.message_authors.distinct.each do |author|
    next if author.id == current_user.id
    json.set! author.id do
      json.extract! author, :id, :username
    end
  end
end
