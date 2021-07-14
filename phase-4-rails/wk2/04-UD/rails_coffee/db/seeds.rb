# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Coffee.delete_all

Coffee.create(name: "Churupampa", company: "Factory", whole_bean: true)
Coffee.create(name: "Guatamalen", company: "Water Street", whole_bean: false)
Coffee.create(name: "Full City Mantra", company: "Coffee Bean", whole_bean: true)
Coffee.create(name: "Bourbon Brown Sugar", company: "Biggby", whole_bean: false)

puts "SEEDED"
