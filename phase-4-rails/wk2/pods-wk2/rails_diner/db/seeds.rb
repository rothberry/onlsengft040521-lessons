# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Dish.delete_all
Ingredient.delete_all
DishIngredient.delete_all

d1 = Dish.create(name: "dog food")
d2 = Dish.create(name: "Salmon Mac and Cheese")

i1 = Ingredient.create(name: "lobster")
i2 = Ingredient.create(name: "macaroni")
i3 = Ingredient.create(name: "salmon")

DishIngredient.create(dish_id: d1.id, ingredient_id: i1.id)
DishIngredient.create(dish_id: d2.id, ingredient_id: i2.id)
DishIngredient.create(dish_id: d2.id, ingredient_id: i3.id)

puts "SEEDEED"
