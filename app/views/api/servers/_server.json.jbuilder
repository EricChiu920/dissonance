json.extract! server, :id, :name
# json.ownerId server.owner.id
json.privateServer server.private

if users
  json.userCount users.length
end