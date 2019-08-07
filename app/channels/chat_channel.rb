class ChatChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_for 'chat_channel'
  end

  def speak(data)
    message = Message.create({
      author_id: data['author_id'],
      body: data['message'],
      channel_id: data['channel_id'],
      edited: data['edited']
    })

    socket = {
      id: message.id,
      body: message.body,
      author_id: message.author_id,
      edited: message.edited,
      created_at: message.created_at
    }

    ChatChannel.broadcast_to('chat_channel', socket)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
