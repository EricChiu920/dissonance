class DmServerChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'dm_server'
  end

  def create_dm_server(data)
    user = User.find_by(username: data['name'])
    server = Server.find_by(name: user.id, owner_id: data['userId'], private: true)
    if (server)
        socket = {
          DMServer: {
            id: server.id,
            name: server.name,
            ownerId: server.owner_id,
            channelId: server.channels.first.id,
            privateServer: true
          },
          type: 'DMServer'
        }

        DmServerChannel.broadcast_to('dm_server', socket)
        return
    end

    if user
      server = Server.new({
        name: user.id,
        owner_id: data['userId'],
        private: true
      })

      if server.save
        socket = {
          DMServer: {
            id: server.id,
            name: server.name,
            ownerId: server.owner_id,
            channelId: server.channels.first.id,
            privateServer: true
          },
          type: 'DMServer'
        }

        server.user_servers.create([
          { user_id: server.owner_id },
          { user_id: user.id }
        ])

        DmServerChannel.broadcast_to('dm_server', socket)
      end
    else
      socket = {
        errorMessage: ["No user with that username exists"]
      }

      DmServerChannel.broadcast_to('dm_server', socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
