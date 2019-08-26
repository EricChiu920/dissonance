class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.new({
      author_id: data['author_id'],
      body: data['message'],
      channel_id: data['channel_id'],
      edited: data['edited']
    })

    if message.save
      socket = {
        message: {
          id: message.id,
          body: message.body,
          authorId: message.author_id,
          channelId: message.channel_id,
          edited: message.edited,
          createdAt: message.created_at,
        },
        type: 'message'
      }

      ChatChannel.broadcast_to('chat_channel', socket)
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
