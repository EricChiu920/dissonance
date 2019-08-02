# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
UserServers.destroy_all

guest = User.create!({username: 'guest', email: 'guest@mail.com', password: 'hunter12'})
eric = User.create!({username: 'Eric', email: 'eric@a.c', password: 'hunter12'})
pokemon_fan1 = User.create!({username: 'Elite4', email: 'pokemon_fan1@pkm.com', password: 'pikachu'})
pokemon_fan2 = User.create!({username: 'GymLeader', email: 'pokemon_fan2@pkm.com', password: 'pikachu'})
pokemon_fan3 = User.create!({username: 'EliteTrainer', email: 'pokemon_fan3@pkm.com', password: 'pikachu'})
pokemon_fan4 = User.create!({username: 'Preschooler', email: 'pokemon_fan4@pkm.com', password: 'pikachu'})
pokemon_fan5 = User.create!({username: 'CoolTrainer', email: 'pokemon_fan5@pkm.com', password: 'pikachu'})

brian = User.create!({username: 'brian', email: 'brian@app-academy.com', password: 'starwars'})
michael = User.create!({username: 'michael', email: 'michael@app-academy.com', password: 'starwars'})
adam = User.create!({username: 'adam', email: 'adam@app-academy.com', password: 'starwars'})
simcha = User.create!({username: 'simcha', email: 'simcha@app-academy.com', password: 'starwars'})
connor = User.create!({username: 'connor', email: 'connor@app-academy.com', password: 'starwars'})
david = User.create!({username: 'david', email: 'david@app-academy.com', password: 'starwars'})
oliver = User.create!({username: 'oliver', email: 'oliver@app-academy.com', password: 'starwars'})
polina = User.create!({username: 'polina', email: 'polina@app-academy.com', password: 'starwars'})
joshua = User.create!({username: 'joshua', email: 'joshua@app-academy.com', password: 'starwars'})
andrew = User.create!({username: 'andrew', email: 'andrew@app-academy.com', password: 'starwars'})

pokemon = pokemon_fan1.created_servers.create!({name: 'Pokemon'})
langrisser = eric.created_servers.create!({name: 'Langrisser'})
app_academy = brian.created_servers.create!({name: 'App Academy'})
fortnite = guest.created_servers.create!({name: 'Fornite'})
minecraft = guest.created_servers.create!({name: 'Minecraft'})
spellbreak = guest.created_servers.create!({name: 'Spellbreak'})
rainbow6 = guest.created_servers.create!({name: 'Rainbow 6'})
apex_legends = guest.created_servers.create!({name: 'Apex Legends'})
overwatch = guest.created_servers.create!({name: 'Overwatch'})
destiny2 = guest.created_servers.create!({name: 'Destiny 2'})
terraria = guest.created_servers.create!({name: 'terraria'})

langrisser.user_servers.create!([
  {user_id: guest.id}
])

pokemon.user_servers.create!([
  {user_id: pokemon_fan2.id},
  {user_id: pokemon_fan3.id},
  {user_id: pokemon_fan4.id},
  {user_id: pokemon_fan5.id},
  {user_id: guest.id},
  {user_id: eric.id}
])

app_academy.user_servers.create!([
  {user_id: andrew.id},
  {user_id: david.id},
  {user_id: oliver.id},
  {user_id: polina.id},
  {user_id: simcha.id},
  {user_id: adam.id},
  {user_id: joshua.id},
  {user_id: michael.id},
  {user_id: connor.id},
  {user_id: guest.id}
])
