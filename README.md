# dissonance
Clone of Discord

# useful links
https://medium.com/@benpong89/action-cable-and-react-9a00be5e391b

#bug log
Got a n+1 query when using count on a association in jbuilder
.count was a invoking the active method that would query the database
instead of the basic ruby method on arrays

Solved by using .length or .size instead of .count