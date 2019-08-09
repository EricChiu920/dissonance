# dissonance
dissonance is a clone of Discord, a website and a desktop application that has live text and voice chat.
The clone focuses on the text chat portion of the website.

[Link to site](https://dissonance-app.herokuapp.com/)

## Key Features
- Users, you can sign up or demo the site. Joined server and messaages will be saved and linked to your account.
- List of servers a user can freely join and leave, as well as the ability to create their own.
- Seperate channels to keep discussion of topics seperate.
- Live chat! Chat messages will instantly appear on screen without needing a refresh for everyone in the channel.

## Technology stack
The technologies used were
- postgreSQL for database
- ruby on rails for the backend MVC framework
- React.js for the frontend library.
- Redux for frontend state management

Deep delve
 ***
Live chat is a tricky problem, when messages appear on your screen it's hard to keep track of chat if all we have is just the body of the message. So we need to additionally present not just the message but also other helpful information like who sent it and when it was sent.
To solve this I conditionally have react dispatch a thunk action creator if the user that sent the message is not in the redux store already, when the response comes back we now have new information about the user that sent the message and we can now keep track of who sent what message.

```
App.chatRoom = App.cable.subscriptions.create(
  { channel: 'ChatChannel' },
  {
    received: (data) => {
      const { message: { authorId }, message } = data;

      receiveMessage(message);

      if (!users[authorId]) {
        fetchUser(authorId);
      }
    },
```
