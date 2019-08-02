json.partial! '/api/users/user', user: @user
json.joinedServers @user.servers.pluck(:id)
