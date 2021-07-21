# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Instrument.delete_all

Instrument.create(name: "trumpet", section: "brass", rating: 100)
Instrument.create(name: "flute", section: "woodwind", rating: 0)
Instrument.create(name: "french horn", section: "brass", rating: 42)

# BAD SEED
bad_presence = Instrument.new
bad_rating = Instrument.new(name: "test", section: "testo", rating: 99999)
bad_uniq = Instrument.new(name: "trumpet", section: "not brass", rating: 5)

puts "SEEDED"
