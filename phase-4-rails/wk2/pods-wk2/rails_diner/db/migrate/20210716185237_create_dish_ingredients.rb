class CreateDishIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :dish_ingredients do |t|
      t.integer :dish_id
      t.integer :ingredient_id
      # t.references :dishes, foreign_key: true
      # t.references :ingredients, foreign_key: true

      t.timestamps
    end
  end
end
