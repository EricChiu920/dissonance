json.user do
  json.extract! user, :id, :username
  json.joinedServers []
  json.createdServers []
end
