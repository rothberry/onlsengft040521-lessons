# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Artist.delete_all

mike = Artist.create({ name: "Michaelanglo" })
don = Artist.create({ name: "Donatello" })
raph = Artist.create({ name: "Raphael" })
leo = Artist.create({ name: "Leonardo" })

puts "SEEDED"
