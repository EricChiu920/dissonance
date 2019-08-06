# dissonance
Clone of Discord

# useful links
https://medium.com/@benpong89/action-cable-and-react-9a00be5e391b
https://blog.usejournal.com/videochat-in-under-30-a-rails-react-tutorial-534930c6cd96

#bug log
Problem: Got a n+1 query when using count on a association in jbuilder

Issue: .count was a invoking the active method that would query the database instead of the basic ruby method on arrays

Solution: Solved by using .length or .size instead of .count

***

Problem: Channel list was not updating with the newly created channel.

Issue: Channel Selector was checking for channel.serverId === serverId (camel case) but jbuilder sends back a object with the id as server_id (snake case)

Solution: Change the object key in jbuilder
