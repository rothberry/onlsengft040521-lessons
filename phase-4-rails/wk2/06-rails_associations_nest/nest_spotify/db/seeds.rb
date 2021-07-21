# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.delete_all
Song.delete_all
Genre.delete_all

# CREATE ARTISTS
a1 = Artist.create(name: "Aesop Rock")
a2 = Artist.create(name: "REM")
a3 = Artist.create(name: "Traitors")
a4 = Artist.create(name: "The Cranberries")
a5 = Artist.create(name: "Griz")

puts "SEEDED ARTISTS"

g1 = Genre.create(name: "Pop")
g2 = Genre.create(name: "Rock")
g3 = Genre.create(name: "Classical")

puts "SEEDED GENRES"

s1 = Song.create(title: "Rails run", artist_id: a1.id, genre_id: g1.id)
s2 = Song.create(title: "Is this valid?", artist_id: a2.id, genre_id: g1.id)
s3 = Song.create(title: "The react hook", artist_id: a3.id, genre_id: g2.id)
s4 = Song.create(title: "Losing my ruby", artist_id: a4.id, genre_id: g2.id)

puts "SEEDED SONGS"
