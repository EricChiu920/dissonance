json.user do
  json.extract! user, :id, :username
  json.joinedServers user.servers.pluck(:id)
  json.createdServers user.created_servers.pluck(:id)
end

json.servers do
  user.servers.each do |server|
    json.set! server.id do
      json.extract! server, :id, :name
      json.privateServer server.private
    end
  end
end
