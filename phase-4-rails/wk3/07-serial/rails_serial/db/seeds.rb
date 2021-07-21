# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Owner.delete_all
Dog.delete_all

o1 = Owner.create(name: "Phil", age: 100)
o2 = Owner.create(name: "Brinton", age: 72)
o3 = Owner.create(name: "Joel", age: 22)

o1.dogs.create(name: "Chauncy", breed: "Mutt")
o2.dogs.create(name: "Thomas", breed: "tabby")
o3.dogs.create(name: "Spot", breed: "Rottweiller")
o1.dogs.create(name: "Cosmo", breed: "Beardie")

puts "SEEDED"
