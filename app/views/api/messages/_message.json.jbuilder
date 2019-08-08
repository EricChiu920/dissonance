json.extract! message, :id, :body, :edited
json.authorId message.author_id
json.channelId message.channel_id
json.createdAt message.created_at