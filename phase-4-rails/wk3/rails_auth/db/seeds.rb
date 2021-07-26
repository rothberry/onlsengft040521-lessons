# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Create Users

u1 = User.create(email: "phil@phil.com", password: "123")
u2 = User.create(email: "brinton@brinton.com", password: "123")
u3 = User.create(email: "joel@joel.com", password: "123")
u4 = User.create(email: "tyler@tyler.com", password: "123")

# u1.instruments.create(name: section: rating: )

puts "SEEDED"
