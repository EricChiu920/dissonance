json.extract! @channel, :name, :id
json.serverId @channel.server_id
json.ownerId @channel.owner.id