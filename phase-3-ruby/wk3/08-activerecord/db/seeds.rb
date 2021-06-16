Artist.delete_all
Song.delete_all

# Create Artists

dreamtheater = Artist.create(name: "Dream Theater")
fray = Artist.create(name: "The Fray")
tool = Artist.create(name: "Tool")

# Create Songs

Song.create(title: Faker::Music::RockBand.song, artist_id: dreamtheater.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: dreamtheater.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: tool.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: tool.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: tool.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: fray.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: fray.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: fray.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: fray.id)
Song.create(title: Faker::Music::RockBand.song, artist_id: fray.id)

puts "SEEDED"